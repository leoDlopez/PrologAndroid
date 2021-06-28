const URI = 'http://192.168.100.27:8000';

export default {
    async createUser(data) {
        try {
            // let response = await fetch(URI + '/api/usuario', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: data
            // });

            return fetch(URI + '/api/usuario/test')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    return json;
                })
                .catch((error) => {
                    console.error(error);
                });

        }
        catch (e) {
            console.log(e)
        }
    }
}