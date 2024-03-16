import { test, expect } from '@playwright/test'

test.describe('blog', () => {
  test('should open blog', async ({ page }) => {
    await page.goto('/blog')
    await page.waitForSelector('article')
    expect(await page.isVisible('article')).toBeTruthy()
  })

  test('should open article', async ({ page }) => {
    await page.goto('/blog')
    await page.waitForSelector('article')
    await page.click('article')
    await page.waitForSelector('h1')
    expect(await page.isVisible('h1')).toBeTruthy()
  })
})
