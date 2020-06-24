const { createConnection, Connection } = require("typeorm");
const { User } = require('./entity/User');

async function f() {
    const connection = await createConnection({
        type: "postgres",
        host: "ruby.db.elephantsql.com",
        post: 5432,
        username: "uvjtpwkm",
        password: "T3rZ9TMp6dAJztWOYNdFC3Bt9cyABc8O",
        database: "uvjtpwkm",
        entities: [
            User
        ]
    })

    await connection.synchronize();
}

f();