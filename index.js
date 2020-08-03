const { CRUD } = require("./helpers");
const db = require("./models");
//captura los comandos que estan en un array
const params = process.argv;
// al escribir node . se muestran un array con 2 elementos
if (params.length <= 2) {
  process.exit(0);
}
//agrego los elementos desde el segundo elementos
const args = params.slice(2);
// node . --read:Contact
const command = args[0].split(":")[0].substring(2); //read
const entity = args[0].split(":")[1]; //Contact

switch (command) {
  case CRUD.CREATE:
    try {
      //node . --create:Contact --firstname=Ricardo --lastname=Mendoza --phone=234234 --email=ricardo@gmail.com
      const data = {};
      args.slice(1).map((arg) => {
        //separan propiedades y valores pero aun con los --
        const tmp = arg.split("=");
        data[tmp[0].substring(2)] = tmp[1];
        //data[firstname] = Ricardo
      });
      //una vez lleno el objeto
      //llega el nombre del modelo
      db[entity]
        .create(data) //paso los datos y creo el registro
        .then(() => console.log("Contact created!"))
        .catch(console.log);
    } catch (error) {
      console.log("Verifica el nombre de la tabla");
    }
    break;
  case CRUD.READ:
    try {
      db[entity].findAll().then((data) => {
        let data2 = data.map((d) => {
          return d.dataValues;
        });
        console.log(data2);
      });
    } catch (error) {
      console.log("Escribe bien la tabla a consultar");
    }
    break;
  case CRUD.FINDBYID:
    //node . --findbyid:Contact:1
    try {
      let id = args[0].split(":")[2]; //Contact
      db[entity].findByPk(id).then((data) => {
        console.log(data.dataValues);
      });
    } catch (error) {
      console.log("Escriba bien el nombre su tabla");
    }
    break;
  case CRUD.DELETE:
    //node . --delete:Contact:1
    try {
      let id_delete = args[0].split(":")[2]; //Contact
      db[entity]
        .destroy({
          where: {
            id: id_delete,
          },
        })
        .then(() => console.log(`Se borro el registro ${id_delete}`));
    } catch (error) {
      console.log("Verifica el nombre de la tabla o id");
    }
    break;
  case CRUD.UPDATE:
    try {
      //node . --update:Contact:1 --firstname=Ricardo323 --lastname="Mendoza Arjona"  --phone=2334234 --email=ricardo3@gmail.com
      let id_update = args[0].split(":")[2]; //obtengo id
      const data_update = {};
      args.slice(1).map((arg) => {
        //separan propiedades y valores pero aun con los --
        const tmp = arg.split("=");
        data_update[tmp[0].substring(2)] = tmp[1];
        //data[firstname] = Ricardo
      });
      //llega el nombre del modelo
      db[entity]
        .update(data_update, { where: { id: id_update } }) //paso los datos y creo el registro
        .then(() => console.log(`Contact  Update! when id is: ${id_update}`))
        .catch(console.log);
    } catch (error) {
      console.log("Verifica el nombre de la tabla o id");
    }
    break;

  default:
    console.log("Operation not found!");
}
