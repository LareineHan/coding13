import React from 'react'
import "./InformationCard.style.css"

const InformationCard = () => {
  return (
    <div>
        <div class="information-card">
            <section class="information-card-content">
                <h3>We're excited to be here</h3>
                <p>We're Apartments.com and we've been helping millions of renters find a new home for a long time.</p>
                <div>
                    <a href="#"><button class="information-card-content-btn">Find Out More</button></a>
                </div>
            </section>
            <section className='information-card-img' style={{backgroundImage: "url(https://www.apartments.com/a/838371/modules/homepagev2/content/images/widgets/widget_excited_to_be_here_1407.png)"}}></section>
        </div>


        <div class="information-card">
            <section className='information-card-img' style={{backgroundImage: "url(https://www.apartments.com/a/86914a/modules/homepagev2/content/images/widgets/widget_excited_to_be_here_fr_1407.png)"}}></section>
            <section class="information-card-content">
                <h3>Nous sommes ravis d'être ici</h3>
                <p>Nous sommes Apartments.com et nous aidons depuis longtemps des millions de locataires à trouver un nouveau logement.</p>
                <div>
                    <a href="#"><button class="information-card-content-btn">Parcourir Les Articles</button></a>
                </div>
            </section>
        </div>

        <div class="information-card">
            <section class="information-card-content">
                <h3>Find a Renter Fast</h3>
                <p>Filling your vacancies has never been easier.</p>
                <div>
                    <a href="#"><button class="information-card-content-btn">List Your Property</button></a>
                </div>
            </section>
            <section className='information-card-img' style={{backgroundImage: "url(https://www.apartments.com/a/ed80d0/modules/homepagev2/content/images/widgets/widget_find_resident_1407.png)"}}></section>
        </div>
</div>
  )
}

export default InformationCard



