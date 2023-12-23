db.createUser({
    user: 'isi dengan username yang di inginkan ',
    pwd: 'isi dengan password yang di inginkan ',
    roles: [{
        role: 'readWrite',
        db: 'nama database'
    }]
})