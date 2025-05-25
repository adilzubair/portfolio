// Simple script to create placeholder images for projects
// You can replace these with actual project screenshots

const projects = [
  { name: 'quickeval', color: '#4F46E5' },
  { name: 'crashchain', color: '#059669' },
  { name: 'foodbot', color: '#DC2626' },
  { name: 'ibm-platform', color: '#7C3AED' },
  { name: 'ledgertrue', color: '#EA580C' }
];

console.log('To add actual project images:');
console.log('1. Take screenshots of your projects');
console.log('2. Save them as .jpg or .png files in public/images/projects/');
console.log('3. Use these exact filenames:');

projects.forEach(project => {
  console.log(`   - ${project.name}.jpg`);
});

console.log('\nRecommended image dimensions: 800x600 or 1200x800 pixels');
console.log('File formats: .jpg, .jpeg, .png, .webp');
