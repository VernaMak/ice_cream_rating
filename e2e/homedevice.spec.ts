import { test, devices, expect } from '@playwright/test';

test.use({
    browserName:'chromium',
    ...devices['iPhone XR']
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for colours on iphone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#colouring');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(254, 248, 236)");
    })

    test.describe("show title in header for iPhone XR", () => {
        test('Testing for header on iphone XR', async ({ page }) => {
            await page.goto('http://localhost:3000/')
    
            await expect(page).toHaveTitle('Ice Cream Rating');
        })

        
    })
    


})


test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("More button", () => {
    test("Testing the button on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000/more')
        
        });
        

        
    });

    test.describe('button format', () => {
        test('button wrap by a div', async({ page }) => {
            await page.goto('http://localhost:3000/')
    
            await expect(page.locator('div > button ')).toHaveCount(1);
        })
    })

test('should have h2 text in home', async ({ page }) => {

    await page.goto('http://localhost:3000/')
    await expect(page.locator('#h2')).toContainText('Rating the best ice cream in the world')


})

test('if link on page', async ({ page }) => {
    const link = page.locator('standard-link');
    await expect(link).toHaveCount(0);
})






