// Code your solution here
  
function findMatching (driver, string) {
    return  driver.filter( (potentialMatch) => potentialMatch.toUpperCase() === string.toUpperCase() )
}    
  
function fuzzyMatch(driver, string){
    return driver.filter((potentialMatch) => potentialMatch.toUpperCase().indexOf(string.toUpperCase())=== 0 )
}
function matchName(driver, string){
    return  driver.filter( (potentialMatch) => potentialMatch.name === string )
}