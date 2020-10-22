const core = require('@actions/core');
const dayjs = require('dayjs');
const dayjsPluginUTC = require('dayjs/plugin/utc')

dayjs.extend(dayjsPluginUTC)

async function main() {
	try {
		const timezone = core.getInput('timeZone');// default: 8
		const formatStr = core.getInput('format');// default: YYYY-MM-DD-HH-mm-ss
		console.log('time zone', timezone)
		console.log('time format', formatStr)

		const str = dayjs().utcOffset(timezone).format(formatStr)
		console.log(str)

		core.setOutput("time", str);

	} catch (error) {
		core.setFailed(error.message);
		console.log('err ----> ', error)
	}
}

main();
