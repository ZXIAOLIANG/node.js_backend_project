describe('GET /', function() {
    it('returns a index.html', function(done) {
        request.get('/')
            .expect(200)
            .end(function(err, res) {
                done(err);
            });
    });
});

// Test the post request to update the json
describe('POST /json', function() {
    it('updates the json file', function(done) {
        request.post('/json')
            .send({
                title: 'greetings from far end',
                body: 'Hi!'
            })
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.deep.equal({
                    title: 'greetings from far end',
                    body: 'Hi!'
                });
                done(err);
            });
    });
});
