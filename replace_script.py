import os

files = [
    'src/components/sections/WhyTrichova.tsx',
    'src/components/sections/Technology.tsx',
    'src/components/sections/Services.tsx',
    'src/components/sections/Results.tsx',
    'src/components/sections/Hero.tsx',
    'src/components/sections/DHIFeature.tsx',
    'src/components/sections/Comparison.tsx',
    'src/components/sections/ClinicSection.tsx',
    'src/components/layout/Navbar.tsx',
    'src/components/layout/Footer.tsx'
]

for f in files:
    path = os.path.join(os.getcwd(), f.replace('/', '\\'))
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Replace the scroll logic
        content = content.replace(
            'document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })',
            'window.dispatchEvent(new Event("open-booking-modal"))'
        )
        content = content.replace(
            'document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });',
            'window.dispatchEvent(new Event("open-booking-modal"));'
        )
        
        # In Navbar/Footer, they might have a generic scrollTo('#contact')
        content = content.replace('scrollTo("#contact")', 'window.dispatchEvent(new Event("open-booking-modal"))')
        content = content.replace('handleNavClick("Contact", "#contact")', 'window.dispatchEvent(new Event("open-booking-modal"))')
        
        # Change href="#contact" to href="#book" so standard links also trigger hashchange
        content = content.replace('href="#contact"', 'href="#book"')
        
        with open(path, 'w', encoding='utf-8') as file:
            file.write(content)
