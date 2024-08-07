/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {

    // Removal of Blocky Siege - Mortars & Related Recipes
    event.remove({ output:'blocky_siege:mortar' })
    
    // Removal of Create:Encased - Chorium Ingots & Related Recipes
    event.remove({ output:'createcasing:chorium_ingot' })
    event.remove({ input: 'createcasing:chorium_ingot' })

    // Removal of Create:Encased - Creative Casings & Related Recipes
    event.remove({ output:'createcasing:creative_casing' })
    event.remove({ input: 'createcasing:creative_casing' })

    // Removal of Forbidden & Arcanus- Obsidian Skull & Related Recipes
    event.remove({ output:'forbidden_arcanus:obsidian_skull' })
    event.remove({ input: 'forbidden_arcanus:obsidian_skull' })


    
    console.log('Hello! The recipe event has fired!')
  })