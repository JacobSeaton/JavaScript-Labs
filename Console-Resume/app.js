function displayPosition(company, job, description) {
    console.log('* ' + job + " at " + company + ' - ' + description);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log('* BAM: ' + skill);
    } else {
        console.log('* ' + skill);
    }
}
console.log('Name: ' + 'jacob seaton'.toUpperCase());
console.log('Career: Web Developer');
console.log('Description: Learning new things.');
console.log('');
console.log('My Interests');
console.log('* Montana');
console.log('* Programming');
console.log('* Exercise');
console.log('* Travelling');
console.log('');
console.log('My Previous Experience:');
displayPosition('NBA Headquarters', 'Stat Analyzer', 'Categorized and Sorted Statistics for NBA games.')
displayPosition('Kawasaki Motors', 'Quality Assurance Manager', 'Tested Motors for Validity.')
displayPosition('Crumbl Cookies', 'Manager', 'Oversaw Company Procedures and Employees.')
console.log('');
console.log('My Skills:')
displaySkill('Producing Music', true)
displaySkill('Hiking', false)
displaySkill('Rock Climbing', true)
displaySkill('Archery', true)
displaySkill('Napping', false)
displaySkill('Solving Riddles', false)

