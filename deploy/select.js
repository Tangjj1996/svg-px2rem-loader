const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const semver = require('semver')
const { program } = require('commander')

const prompt = inquirer.createPromptModule({ output: process.stderr })
const PACKAGE = require(process.cwd(), 'package.json')

program.version(PACKAGE.version)

program.on('--help', () => {
    console.log('Select release version using cli')
})

if (!process.argv.slice(2).length) {
    getReleaseVersion()
        .then((version) => {
            process.stdout.write(version)
        })
        .catch((err) => {
            console.error(err)
            process.exit(1)
        })
}

program.parse(process.argv)

function getReleaseVersion() {
    return new Promise((resolve, reject) => {
        const dir = path.resolve(process.cwd(), 'package.json')
        if (!fs.existsSync(dir)) {
            reject(new Error(dir + "doesn't exit"))
            return
        }
        const version = require(dir).version
        if (!version) {
            reject(new Error('no version in package.json'))
            return
        }
        const releaseType = [
            'patch',
            'minor',
            'major',
            'prepatch',
            'preminor',
            'premajor',
            'prerelease',
        ]
        const choices = releaseType.map(
            (item) => `${item}: ${semver.inc(version, item)}`
        )
        prompt([
            {
                name: 'version',
                type: 'list',
                message: 'Select release version',
                choices,
            },
        ]).then(({ version }) => {
            const newVersion = version.split(':')[1].trim()
            resolve(newVersion)
        })
    })
}
