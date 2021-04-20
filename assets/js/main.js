class VideoSection {
   constructor() {
      this.container = document.getElementById('video-container');
      this.intro = this.container.querySelector('.video-intro');
      this.scrollPosition = 0;
      this.windowHeight = window.screen.height - 200;
      this.minScale = 1;
      this.maxScale = 3.2;
      this.DOM();
      this.nav = document.querySelector('.navigation');
   }

   DOM() {
      document.addEventListener('DOMContentLoaded', () => {
         this.scroll();
      });
   }

   scroll() {
      document.addEventListener('scroll', (e) => {
         this.scrollPosition = window.scrollY;

         this.updateBackground();
      });
   }

   updateBackground() {
      this.updateBackgroundClass();
      this.updateBackgroundScale();
   }

   updateBackgroundClass() {
      if (this.windowHeight < this.scrollPosition) {
         this.container.classList.add('hidden');
         this.nav.classList.remove('hidden');
      } else {
         this.container.classList.remove('hidden');
         this.nav.classList.add('hidden');
      }
   }

   updateBackgroundScale() {
      if (this.scrollPosition < this.windowHeight) {
         let scale =
            (this.scrollPosition * (this.maxScale - this.minScale)) /
               this.windowHeight +
            this.minScale;

         this.intro.style.transform = `scale(${scale})`;
      }
   }
}

new VideoSection();
