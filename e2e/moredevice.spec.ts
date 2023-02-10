import { test, devices, expect } from '@playwright/test';

test.use({
    browserName:'chromium',
    ...devices['iPhone XR']
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for colours on iphone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/more')

        const mainContainer = page.locator('#bodytext_color');

        const fontColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        })

        console.log(fontColour);
        expect(fontColour).toBe("rgb(95, 158, 160)");
    });



    test.describe("show meta tag for iPhone XR", () => {
        test('Testing for header on iphone XR', async ({ page }) => {
            await page.goto('http://localhost:3000/more')
    
            const metaDescriptionOne = page.locator('meta[name="vm"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "author:vm")



    });
    });
});





test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
});

test.describe("fun fact list", () => {
    test("Testing the list on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000/more')
        

       await expect(page.locator('ul > li')).toHaveCount(4);
        });


    test.describe('h2 format', () => {
        test('h2 wrap by a div', async({ page }) => {
            await page.goto('http://localhost:3000/more')
    
            await expect(page.locator('div > h2')).toHaveCount(1);
        });
    });

    test('should have br in home', async ({ page }) => {

    await page.goto('http://localhost:3000/more')
    await  await expect(page.locator('br')).toHaveCount(2);
    


});
});


test('text2', async ({ page }) => {
    await page.goto('http://localhost:3000/more')

    
    await expect(page.locator('#text2')).toContainText('Please click like if you like ice cream!')

});