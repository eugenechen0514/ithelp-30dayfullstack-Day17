class MongoService {
    /**
     * 
     * @param {MongoClient} mongoClient
     * @param {EchoDao} echoDao
     */
    constructor({ mongoClient, echoDao }) {
        this.mongoClient = mongoClient;
        this.echoDao = echoDao;
    }

    /**
     * 
     * @return Promise<bool>
     */
    isConnected() {
        return Promise.resolve(this.mongoClient.isConnected())
    }

    /**
     * 
     * @param {*} data 
     * @return Promise
     */
    async insertEcho(data) {
        return this.echoDao.insert(data);
    }
}

module.exports = MongoService;
