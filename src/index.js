#!/usr/bin/env node
const fs = require('fs')
const { Command } = require('commander')
const program = new Command()
const pkg = JSON.parse(fs.readFileSync('package.json'))
program.version(pkg.version)
program.parse(process.argv)

