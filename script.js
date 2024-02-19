function loadContent(section) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    switch (section) {
        case 'Imp':
            content.innerHTML=`
      <h2>Importance of Safe Collection and Segregation</h2>
      <p>Proper collection and segregation of sanitary waste is essential to preventing environmental pollution and the spread of diseases. It also ensures that the waste is disposed of in a safe and responsible manner, protecting the health and well-being of individuals and communities.</p>
      <h3>Collection and Segregation Process</h2>
      <ol>
        <li>
          <h3>Collecting Sanitary Waste</h3>
          <p>Collect sanitary waste in a leak-proof, puncture-resistant container. Make sure the container is easy to clean and disinfect, and has a lid to prevent leakage or spillage.</p>
        </li>
        <li>
          <h3>Segregating the Waste</h3>
          <p>Segregate the waste based on the type of waste (e.g., used sanitary pads, tampons, applicators). Use separate containers for each type of waste, and label them clearly.</p>
        </li>
        <li>
          <h3>Disposing of the Waste</h3>
          <p>Dispose of the waste in a designated area or bin. Make sure the area is well-ventilated and has a cover to prevent the spread of diseases. If possible, use incineration or other safe disposal methods.</p>
        </li>
        <li>
          <h3>Cleaning and Disinfecting the Container</h3>
          <p>After disposing of the waste, clean and disinfect the container. Use a disinfectant that is effective against viruses and bacteria, and make sure to follow the manufacturer's instructions.</p>
        </li>
      </ol>`;
            break;
        case 'guidelines':
            content.innerHTML = `
                <h2>Disposal Guidelines</h2>
                <p>Follow these guidelines to dispose of sanitary waste properly...
                <li>Use Covered Bins: Equip bathrooms with covered bins for sanitary waste to prevent germ spread and contain odors.</li><li>
                Do Not Flush Sanitary Waste: Avoid flushing sanitary products to prevent plumbing blockages and issues at wastewater treatment facilities.</li><li>
                Use Sanitary Bags: Wrap sanitary waste in biodegradable bags before disposal to ensure hygienic handling and contain leaks and odors.</li><li>
                Regular Bin Maintenance: Empty and clean sanitary bins regularly to maintain hygiene and prevent waste accumulation.</li><li>
                Educate and Signage: Place educational signs in restrooms to guide proper sanitary waste disposal and promote awareness.</li><li>
                Consider Environmentally Friendly Options: Encourage the use of eco-friendly sanitary products that are compostable or made from sustainable materials.</li><li>
                Special Disposal for Infectious Waste: Follow local regulations for disposing of sanitary waste contaminated with infectious agents, especially in healthcare settings.</li><li>
                Safe Handling: Ensure that staff managing sanitary waste wear gloves and appropriate personal protective equipment (PPE) for safety.</li><li>
                Follow Local Regulations: Adhere to specific local rules and regulations regarding sanitary waste disposal to ensure legal compliance.</li><li>
                Incineration: If sanitary waste is incinerated, ensure compliance with environmental regulations to minimize air pollution.</li>
                <p>For reference, Go through the resources given</p>
                <li><a href="https://youtu.be/8AZDEcFchDI?si=ZdyrLlgqy4vwclyw">Feminine hygiene solutions</a></li>
                <li><a href="https://youtu.be/J6bZsI1pi_o?feature=shared">How to use and dispose Sanitary pads</a></li>
                <li><a href="https://youtube.com/shorts/AcKY153xkwQ?si=ZN2rSe-L1WfZimIi">Ways to dispose off sanitary napkin</a></li>
                <li><a href="https://youtu.be/HMh1VCyCAxs?si=neYC4RKMf3AiYnBO">Instructions on how to use the incinerator</a></li>
                </p>`;
            break;
        case 'tips':
            content.innerHTML = `
                <h2>Eco-Friendly Tips</h2>
                <p>Adopting eco-friendly practices for sanitary waste disposal is essential for reducing environmental impact and promoting sustainability. Here are some tips for eco-friendly disposal of sanitary waste:
                <li>Switch to Reusable Products: Consider using reusable sanitary products like menstrual cups, cloth sanitary pads, or period underwear. These products can significantly reduce the amount of waste generated over time.</li><li>
                Choose Biodegradable Options: If disposables are necessary, opt for biodegradable and compostable sanitary products. These products are designed to break down more quickly and have a lesser environmental footprint.</li><li>
                Proper Segregation: Segregate sanitary waste from regular waste where possible. This makes it easier to manage and dispose of responsibly.</li><li>
                Use Eco-Friendly Disposal Bags: For the disposal of sanitary products, use bags made from biodegradable materials instead of plastic. This reduces plastic waste and its environmental impact.</li><li>
                Educate Yourself and Others: Awareness is key to change. Learn about the environmental impact of different sanitary products and share this knowledge with others to encourage more sustainable choices.</li><li>
                Support Sustainable Brands: Purchase sanitary products from companies that are committed to sustainability, use eco-friendly packaging, and support environmental causes.</li><li>
                Consider Composting (Where Applicable): Some biodegradable sanitary products may be suitable for composting. However, this should be done carefully and only with products designed for such disposal to avoid health risks.</li><li>
                Reduce, Reuse, Recycle: Apply the principles of reducing waste, reusing where possible, and recycling to manage sanitary waste more sustainably.</li><li>
                Advocate for Change: Support and advocate for wider availability of eco-friendly sanitary products and proper disposal options in public spaces, schools, and workplaces.</li><li>           
                Dispose of Responsibly: Even when using eco-friendly products, ensure they are disposed of responsibly. Follow local guidelines for waste disposal and recycling.</li><li>
                By implementing these eco-friendly tips, individuals can contribute to reducing the environmental impact of sanitary waste and promoting a healthier planet.</li></p>
                <p>For reference, Go through the resources given</p>
                <li><a href="https://youtu.be/d0BUjI8c88g?si=KO8rlq0STZ8eBb5e">Sanitary Pads: Damaging The Environment & Women's Health</a></li>
                <li><a href="https://youtu.be/4gfr769T8KQ?si=2jci85ckRvHbpyVP">Reusable Cloth Pads For Periods</a></li>
                <li><a href="https://youtu.be/_i6WDsQAd10?si=7Ew0SqV6MNpyV0tq">How to choose the right Sanitary Pad</a></li>
                </p>`;
            break;
        case 'faq':
            content.innerHTML = `
                <h2>Frequently Asked Questions</h2>
                <p>Here are some frequently asked questions (FAQs) regarding eco-friendly sanitary waste disposal:<br>
                <b> 1.What are eco-friendly sanitary products?</b><br>
                Eco-friendly sanitary products are designed to have a minimal environmental impact. They are often made from sustainable, biodegradable materials and can be reusable, such as menstrual cups, cloth pads, and period underwear, or biodegradable disposables.<br><b> 2.Why should I switch to eco-friendly sanitary products?</b><br>
                Switching to eco-friendly sanitary products reduces waste in landfills, decreases your carbon footprint, and lessens the environmental impact associated with the production and disposal of conventional sanitary products. It can also be more cost-effective in the long run.<br>
                <b>3.Are eco-friendly sanitary products safe and hygienic?</b><br>
                Yes, eco-friendly sanitary products are designed to be safe and hygienic. Reusable options like menstrual cups and cloth pads are made from materials that are safe for body use and can be cleaned thoroughly. Biodegradable disposables are made to be hygienic and environmentally friendly.<br>
                
                <b> 4.Can all eco-friendly sanitary products be composted?</b><br>
                Not all eco-friendly sanitary products can be composted. While some biodegradable pads and tampons are designed to break down in industrial composting facilities, not all are suitable for home composting. Always check the product's disposal instructions to ensure proper composting.<br>
                
                <b>5.How do I dispose of biodegradable sanitary products?</b><br>
                Dispose of biodegradable sanitary products according to the manufacturer's instructions. Some may require industrial composting facilities to break down properly, while others can be disposed of in regular trash but will biodegrade faster than conventional products.<br>
                
                <b>6.Where can I find eco-friendly sanitary products?</b><br>
                Eco-friendly sanitary products are increasingly available in supermarkets, health stores, and online. Look for brands that emphasize sustainability in their products and packaging.
                
                <br><b>7.Are reusable sanitary products cost-effective?</b><br>
                Yes, while the initial investment in reusable sanitary products like menstrual cups or cloth pads may be higher, they can be used for several years, saving money over time compared to the recurring cost of disposables.
                
                <br><b>8.How do I care for reusable sanitary products?</b><br>
                Care instructions vary by product type. Generally, menstrual cups should be rinsed and boiled regularly, while cloth pads can be washed in a washing machine. Always follow the manufacturer's care instructions to ensure longevity and hygiene.
                
                <br><b>9.What impact do conventional sanitary products have on the environment?</b><br>
                Conventional sanitary products contribute to environmental pollution due to their plastic content and production processes. They can take hundreds of years to decompose in landfills and may release harmful chemicals as they break down.
                
                <br><b>10.How can I encourage others to use eco-friendly sanitary products?</b><br>
                Educate friends and family about the benefits of eco-friendly products for both the environment and personal health. Share information, resources, and your personal experiences to inspire change.
                <br>
                Adopting eco-friendly sanitary practices is a step towards sustainability, reducing waste, and promoting a healthier environment for future generations.</p>'`;
            break;
        default:
            content.innerHTML = '<p>Select a section to view content.</p>'
    }
}

// Load default content
// document.addEventListener('DOMContentLoaded', () => loadContent('guidelines'))
