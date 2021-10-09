import {$} from 'zx'
import {DateTime} from 'luxon'

const main = async () => {
  const result = await $`ls`
  console.log(`ls result: ${result.stdout}`)

  const now = DateTime.now().toMillis()
  console.log(`now: ${now}`)
}

main().then(() => console.log('Success!'))
