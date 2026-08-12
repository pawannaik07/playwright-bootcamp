import{test,expect} from '@playwright/test'

const HtmlFile2 = "file:///C:/Users/pawan/OneDrive/Documents/pw_mouse_actions.html";

test('double-click', async({page}) => {

    await page.goto(HtmlFile2);

    await page.locator('#dblTarget').dblclick();

})

test('double-click with a 500 ms', async({page}) => {
    await page.goto(HtmlFile2); //instead of writing this everytime is there something which can be globally declared
    await page.locator('#dblTarget').dblclick('delay', 500);

})

test('Shift + Double Click', async({page}) => {
    await page.goto(HtmlFile2); 
    await page.locator('#dblTarget').dblclick({modifiers : ['Shift']});

})

test('double-click at a specific position', async({page}) => { //x: 715, y: 57
    await page.goto(HtmlFile2); 
    await page.locator('.label').dblclick({position : {x: 715, y: 57}});

});

test('force double-click', async({page}) => { 
    await page.goto(HtmlFile2); 
    await page.locator('.warn').click({force : true})

});

test('double-click with a 5-second timeout', async({page}) => { 
    await page.goto(HtmlFile2); 
    await page.locator('#dblTarget').dblclick({timeout : 5000})

});

test('Use trial:', async({page}) => { // did not understand question
    await page.goto(HtmlFile2); 
    await page.locator('#dblTarget').dblclick({trial : true})

});

//Hovers
test('Hover Target and verify', async({page}) => { 
    await page.goto(HtmlFile2); 
    const MouseHover =  page.locator('#hoverTarget');
    await MouseHover.hover();
   // await expect(MouseHover).toBeFocused();

});

test('Hover over the target using force: true', async({page}) => { 
    await page.goto(HtmlFile2); 
    const MouseHover =  page.getByRole('button', {name : 'Force Hover'});
    await MouseHover.hover({force : true});
   
});

test('Perform a Shift + Hover', async({page}) => { 
    await page.goto(HtmlFile2); 
    const MouseHover =  page.locator('#hoverModifierTarget')
    await MouseHover.hover({modifiers : ['Shift']});
   });

test('Perform a Shift + Alt + Hover', async({page}) => { 
    await page.goto(HtmlFile2); 
    const MouseHover =  page.locator('#hoverModifierTarget')
    await MouseHover.hover({modifiers : ['Shift', 'Alt']});
   });

test('Hover at a specific X/Y position', async({page}) => { //x: 213, y: 149
    await page.goto(HtmlFile2); 
    const MouseHover =  page.locator('#hoverPositionTarget')
    await MouseHover.hover({position : {x: 213, y: 149}});
   });

test('Hover over the target with a 5-second timeout', async({page}) => { 
    await page.goto(HtmlFile2); 
    const MouseHover =  page.locator('#hoverTarget')
    await MouseHover.hover({timeout : 5000});
   });

test('Use trial: true to check whether the Hover Target is actionable', async({page}) => { 
    await page.goto(HtmlFile2); 
    const MouseHover =  page.locator('#hoverTarget')
    await MouseHover.hover({trial : true});
   });



