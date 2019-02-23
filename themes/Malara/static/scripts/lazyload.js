// Lazy loading
// source: https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/

const config = {
    rootMargin: '50px 0px',
    threshold: 0
};

let preloadImage = function(image) {
    image.src = image.attributes['data-src'].value;
}
  
let observer = new IntersectionObserver(
    function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, 
    config);

const allImages = document.querySelectorAll('[data-src]');
allImages.forEach(image => {
    observer.observe(image);
});