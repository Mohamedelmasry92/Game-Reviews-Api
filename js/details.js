import { Ui } from "./ui.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

      $('#btnClose').on('click', function() {
        $('.games').removeClass('d-none');
        $('.details').addClass('d-none');
        });
      this.getDetails(id);
   }

   getDetails(elements) {
      const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5c1920c27dmshababebb3a411ee8p14965ejsn4899a6199150',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${elements}`, options)
         .then((response) => response.json())
         .then((response) => this.ui.displayDetails(response))
         .catch((err) => console.error(err))
   }
}
