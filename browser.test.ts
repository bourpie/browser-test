import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
    
  // Mettre ici l'URL du site que vous voulez tester
  await page.goto('http://127.0.0.1:5500/')

  // keep browser open
  await page.pause()
})
