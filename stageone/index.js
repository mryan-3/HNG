const express = require('express')
const app = express()
const now = new Date();
const moment = require('moment')

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name
    const current_day = moment().utc().format('dddd')
    const utc_time = now.toISOString().slice(0, -5) + 'Z'
    const track = req.query.track
    const github_file_url = 'https://github.com/mryan-3/HNG/blob/main/stageone/index.js'
    const github_repo_url = 'https://github.com/mryan-3/HNG.git'
    const status_code = res.statusCode


    const response = {
        slack_name: slack_name,
        current_day: current_day,
        utc_time: utc_time,
        track: track,
        github_file_url: github_file_url,
        github_repo_url: github_repo_url,
        status_code: status_code
    }

    res.json(response)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
