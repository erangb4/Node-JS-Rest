const supertest = require("supertest")

const server = supertest.agent("localhost:3000")

describe('Test REST api "index.js"', () => {
    it('test getAllReports', done => {
        server.get('/reports')
        .end((err, res) => {
            res.status.should.equal(200)
            res.body.reports.should.equal('getAllReports')
            done()
        })
    });
    it('test getAllReports with speed query param', done => {
        server.get('/reports?speed=2')
        .end((err, res) => {
            res.status.should.equal(200)
            res.body.reports.should.equal('getRaw')
            done()
        })
    });
    it('test getAllReports with speed query param not valid', done => {
        server.get('/reports?speed=notanumber')
        .end((err, res) => {
            res.status.should.equal(400)
            res.body.answer.should.equal('notanumber is not a number')
            done()
        })
    });
    it('test getReportById', done => {
        server.get('/reports/1')
        .end((err, res) => {
            res.status.should.equal(200)
            res.body.report.should.equal('getReportById')
            done()
        })
    });
    it('test addReport', done => {
        server.post('/reports')
        .end((err, res) => {
            res.status.should.equal(201)
            res.body.res.should.equal('success')
            res.body.url.should.equal('localhost:3000/reports/a')
            res.body.result.should.equal('addReport')
            done()
        })
    });
    it('test updateReport', done => {
        server.put('/reports/1')
        .end((err, res) => {
            res.status.should.equal(201)
            res.body.res.should.equal('success')
            res.body.url.should.equal('localhost:3000/reports/1')
            res.body.result.should.equal('updateReport')
            done()
        })
    });
    it('test deleteReport', done => {
        server.delete('/reports/1')
        .end((err, res) => {
            res.status.should.equal(200)
            res.body.res.should.equal('success')
            res.body.url.should.equal('localhost:3000/reports/1')
            res.body.result.should.equal('deleteReport')
            done()
        })
    });
   
})