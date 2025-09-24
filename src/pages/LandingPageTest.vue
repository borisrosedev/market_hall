<template>

  <div class="main">
    <div class="hero">
      <div class="hero__container">
        <div class="hero__heading">
          <div class="hero__title"><span class="hero__title_span_white">Votre marketplace <br />d'</span><span
              class="hero__title_span_yellow">antiquités</span><span class="hero__title_span_white"> de confiance</span>
          </div>
          <div class="hero__subtitle"><span class="hero__subtitle__span">Connectons passionnés, collectionneurs et
              professionnels
              dans un<br />écosystème sécurisé. Vendez facilement ou découvrez des pièces<br />authentiques.</span>
          </div>
        </div>
        <div class="hero__value__props">
          <div class="hero__props__single__value">
            <div data-variant="1" class="hero__props__single__svgprop">
              <img src="../assets/icons/auth.svg" alt="authentification garantie" class="vector__auth" />
            </div>
            <div class="hero__props__single__value__str"><span class="hero__props__single__value__span">Authentification
                garantie</span></div>
          </div>
          <div class="hero__props__single__value">
            <div data-variant="2" class="hero__props__single__svgprop">
              <img src="../assets/icons/seller.svg" alt="nb antiquaires" class="vector__seller" />
            </div>
            <div class="hero__props__single__value__str"><span class="hero__props__single__value__span">+10 000
                antiquaires</span></div>
          </div>
          <div class="hero__props__single__value">
            <div data-variant="3" class="hero__props__single__svgprop">
              <img src="../assets/icons/payment.svg" alt="paiement" class="vector__payment" />
            </div>
            <div class="hero__props__single__value__str"><span class="hero__props__single__value__span">Paiement
                sécurisé</span></div>
          </div>
        </div>
        <div class="hero__call__toaction">
          <div class="hero__call__sell">
            <RouterLink to="/seller" class="no-underline">
              <div class="hero__cta__seller"><span class="hero__cta__seller__span">Commencer à vendre</span>
                <div class="hero__cta__seller__svg">
                  <img src="../assets/icons/arrow.svg" alt="fleche" class="vector__arrow" />
                </div>
              </div>
            </RouterLink>
          </div>
          <div class="hero__call__browse">
            <RouterLink to="/products" class="no-underline">
              <div class="hero__cta__browse">
                <span class="hero__cta__browse__span">
                  Explorer les antiquités
                </span>
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="hero__carousel">

          <div class="hero__carousel__view">
            <div class="hero__carousel__image">
              <div v-if="productsGetterLimited?.length > 0">
                <RouterLink :to="`/product-detail/${productsGetterLimited[selectedId].id}`" class="no-underline">
                  <img :src="'http://localhost:5000/static/files/' + productsGetterLimited[selectedId].photo_name"
                    :alt="productsGetterLimited[selectedId].name">
                  <div class="hero__carousel__favbutton">
                    <div data-variant="7" class="hero__container__component_16">
                      <img src="../assets/icons/heart.svg" alt="heart" class="vector__heart" />
                    </div>
                  </div>
                </RouterLink>
                <div class="carousel-wrapper" ref="carouselWrapper">
                  <div class="carousel-track" ref="carouselTrack">
                  </div>
                </div>
              </div>
              <div v-else class="hero__carousel-empty">
                <img src="../assets/icons/camera-off-line.svg" alt="camera-off-line" class="marketplace-picture" />
              </div>
            </div>


            <div v-if="productsGetterLimited?.length > 0">
              <div class="hero__carousel__description">
                <div class="carousel-slide">
                  <div class="hero__carousel__description-name">
                    <h3 class="hero__carousel__description-name_span">{{ productsGetterLimited[selectedId].name }}</h3>
                    <span class="hero__carousel__description-name_span">{{ productsGetterLimited[selectedId].description
                    }}</span>
                  </div>
                  <div class="proudct_periodoverlay">
                    <div class="product_periodstring"><span class="product_periodstring_span">18ème siècle</span>
                    </div>
                  </div>
                  <div class="product__seller"><span class="product__seller_span">Vendu par Maison Dubois
                      Antiquités</span>
                  </div>
                  <div class="product__price"><span class="product__price_span">{{
                    divideBy100(productsGetterLimited[selectedId].price_cents) }}
                      €</span></div>
                  <div class="product__data">
                    <div class="product__stats">
                      <img src="../assets/icons/eye.svg" alt="vues" class="vector__eye" />
                      <div class="product__statsstring"><span class="product__statsstring_span">127 vues</span></div>
                    </div>
                    <div class="product__stats_01">
                      <div data-variant="9" class="product__statsicon_01">
                        <img src="../assets/icons/heart_fav.svg" alt="vues" class="vector__heart_fav" />
                      </div>
                      <div class="product__statsstring_01"><span class="product__statsstring_01_span">23
                          favoris</span>
                      </div>
                    </div>
                  </div>
                  <div class="product__action">
                    <RouterLink :to="`/product-detail/${productsGetterLimited[selectedId].id}`" class="no-underline">
                      <div class="product__actiondetails">
                        <div class="product__actionseller_buttontext"><span class="buttontext_span">Voir les détails</span></div>
                      </div>
                    </RouterLink>
                    <RouterLink :to="`/product-seller/${productsGetterLimited[selectedId].id}`" class="no-underline">
                      <div class="product__actionseller">
                        <div class="product__actionseller_buttontext"><span class="buttontext_01_span">Contacter le vendeur</span></div>
                      </div>
                    </RouterLink>
                  </div>

                </div>
              </div>
            </div>
            <div v-else class="hero__carousel-empty">
              <div class="hero__carousel__description">
                <div class="carousel-slide">
                  <div class="carousel__description-name">
                    <h3 class="carousel__description-name_span">Name</h3>
                    <span class="carousel__description-name_span">Description</span>
                  </div>
                  <div class="proudct_periodoverlay">
                    <div class="product_periodstring"><span class="product_periodstring_span">X siècle</span>
                    </div>
                  </div>
                  <div class="product__seller"><span class="product__seller_span">Vendu par X</span>
                  </div>
                  <div class="product__price"><span class="product__price_span">
                      X €</span></div>
                  <div class="product__data">
                    <div class="product__stats">
                      <img src="../assets/icons/eye.svg" alt="vues" class="vector__eye" />
                      <div class="product__statsstring"><span class="product__statsstring_span">X vues</span></div>
                    </div>
                    <div class="product__stats_01">
                      <div data-variant="9" class="product__statsicon_01">
                        <img src="../assets/icons/heart_fav.svg" alt="vues" class="vector__heart_fav" />
                      </div>
                      <div class="product__statsstring_01"><span class="product__statsstring_01_span">X
                          favoris</span>
                      </div>
                    </div>
                  </div>
                  <div class="product__action">
                    <div class="product__actiondetails" enable="false">
                      <div class="buttontext"><span class="buttontext_span">Voir les détails</span></div>
                    </div>

                    <div class="product__actionseller">
                      <div class="buttontext_01"><span class="buttontext_01_span">Contacter le vendeur</span></div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="carousel__header">
            <div class="carousel__marquee">
              <div class="notre-slection"><span class="notreslection_span">Notre Sélection</span></div>
              <div class="hero__carousel__select--span"><span class="hero__carousel__select--text">Sélectionnées par nos
                  experts pour
                  leur authenticité et leur beauté</span></div>
            </div>
            <div class="carousel_nav">
              <div class="carousel__navbutton-forward">
                <div data-variant="5" class="forward" @click="prevSlide" ref="prevButton">


                  <img src="../assets/icons/arrow_left_carousel.svg" alt="Fleche Gauche"
                    class="vector__left_carousel" />


                </div>
              </div>
              <div class="carousel__navbutton_backward">
                <div data-variant="6" class="backward" @click="nextSlide" ref="nextButton">


                  <img src="../assets/icons/arrow_right_carousel.svg" alt="Fleche Droite"
                    class="vector__right_carousel" />


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gridmarket">

      <div class="gridmarket__container">
        <div class="gridmarket__container__card">
          <div class="gridmarket__container__card__header">
            <div class="gridmarket__container__card__heading">
              <div class="gridmarket__marketplace"><span class="gridmarket__marketplace_span">Marketplace</span></div>
            </div>
            <div class="gridmarket__container__card__heading__container">
              <div class="gridmarket__container__card__heading__container-authentifies"><span
                  class="gridmarket__container__card__heading__container-authentifies-span">Découvrez notre sélection
                  d'antiquités
                  authentifiées</span></div>
            </div>
          </div>
          <div class="gridmarket__container__card__icons">
            <div class="gridmarket__container__card__button-filter">
              <div class="gridmarket__container__card__button-filter-svgmargin">
                <div class="gridmarket__container__card__button-filter-svg">
                  <div data-variant="22" class="gridmarket__container__card_component-filter ">
                    <img src="../assets/icons/filter.svg" alt="Filtre" class="vector_filter" />

                  </div>
                </div>
              </div>
              <div class="filtres"><span class="filtres_span">Filtres</span></div>
            </div>
            <div class="border">
              <div class="gridmarket__container__card__button-grid">
                <div data-variant="23" class="gridmarket__container__card_component-grid">
                  <img src="../assets/icons/grid.svg" alt="grid" class="vector_grid" />


                </div>
              </div>
              <div class="gridmarket__container__card__button-list">
                <div data-variant="24" class="gridmarket__container__card_component-list"></div>

                <img src="../assets/icons/list.svg" alt="list" class="vector_list" />
              </div>
            </div>
          </div>
        </div>
        <div class="gridmarket__container__label">
          <div class="gridmarket__button_yellow">
            <div class="tous"><span class="tous_span">Tous</span></div>
          </div>
          <div class="gridmarket__button_black">
            <div class="mobilier"><span class="mobilier_span">Mobilier</span></div>
          </div>
          <div class="gridmarket__button_black">
            <div class="bijoux"><span class="bijoux_span">Bijoux</span></div>
          </div>
          <div class="gridmarket__button_black">
            <div class="art-dcoratif"><span class="artdcoratif_span">Art Décoratif</span></div>
          </div>
          <div class="gridmarket__button_black">
            <div class="horlogerie"><span class="horlogerie_span">Horlogerie</span></div>
          </div>
          <div class="gridmarket__button_black">
            <div class="peinture"><span class="peinture_span">Peinture</span></div>
          </div>
          <div class="gridmarket__button_black">
            <div class="luminaires"><span class="luminaires_span">Luminaires</span></div>
          </div>
        </div>
        <div class="gridmarket__list__cards">
          <RouterLink :to="`/product-detail/${gridLine1Col1}`" class="no-underline">
            <div class="background-border-shadow background-border-shadow-line1-col1">
              <div class="gridmarket__container_gradient"></div>
              <div class="gridmarket__container_line1-col1">
                <div class="gridmarket__container_background">

                  <div v-if="productsGetterLimited?.length > 0">
                    <img :src="'http://localhost:5000/static/files/' + productsGetterLimited[gridLine1Col1].photo_name"
                      :alt="productsGetterLimited[gridLine1Col1].name" class="marketplace-picture">

                  </div>
                  <div v-else class="marketplace-empty">
                    <img src="../assets/icons/camera-off-line.svg" alt="camera-off-line" class="marketplace-picture" />
                  </div>

                  <div class="gridmarket__container_background_button">
                    <div data-variant="25" class=".gridmarket__container__card_component-camera">

                    </div>
                  </div>
                  <div class="gridmarket__container_type">
                    <div class="gridmarket__container_type_background">
                      <div class="mobilier_01"><span class="mobilier_01_span">Mobilier</span></div>
                    </div>
                  </div>
                </div>
                <div class="gridmarket__contener__description">
                  <div class="gridmarket__contener__description-heading">
                    <div class="commode-transition-louis-xv_01"><span class="commodetransitionlouisxv_01_span">{{
                      productsGetterLimited[gridLine1Col1].name }} : {{
                          productsGetterLimited[gridLine1Col1].description }}</span></div>
                  </div>
                  <div class="gridmarket__contener__description-antiquaire">
                    <div class="antiquits-martin-paris"><span class="antiquitsmartinparis_span">Antiquités Martin •
                        Paris</span></div>
                  </div>
                  <div class="gridmarket__contener__description_price">
                    <div class="gridmarket__contener__description_amount">
                      <div class="text-1-890-"><span class="f890_span">{{
                        divideBy100(productsGetterLimited[gridLine1Col1].price_cents) }} €</span></div>
                    </div>
                    <div class="container_14">
                      <div data-variant="26" class="gridmarket__container__card_component_12">

                      </div>
                      <img src="../assets/icons/eye.svg" alt="eye" />
                      <div class="text-42"><span class="f2_span">42</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="`/product-detail/${gridLine1Col2}`" class="no-underline">
            <div class="background-border-shadow background-border-shadow-line1-col2">
              <div class="gridmarket__container_gradient"></div>
              <div class="gridmarket__container_line1-col2">
                <div class="gridmarket__container_background">

                  <div v-if="productsGetterLimited?.length > 0">
                    <img :src="'http://localhost:5000/static/files/' + productsGetterLimited[gridLine1Col2].photo_name"
                      :alt="productsGetterLimited[gridLine1Col2].name" class="marketplace-picture">
                  </div>
                  <div v-else class="marketplace-empty">
                    <img src="../assets/icons/camera-off-line.svg" alt="camera-off-line" class="marketplace-picture" />
                  </div>
                  <div class="gridmarket__container_background_button">
                    <div data-variant="27" class="gridmarket__container__card_component_16">
                      <div class="vector_30"></div>
                    </div>
                  </div>
                  <div class="gridmarket__container_type">
                    <div class="gridmarket__container_type_background">
                      <div class="art-dcoratif_01"><span class="artdcoratif_01_span">Art Décoratif</span></div>
                    </div>
                  </div>
                </div>
                <div class="gridmarket__contener__description">
                  <div class="gridmarket__contener__description-heading">
                    <div class="vase-gall-art-nouveau_01"><span class="vasegallartnouveau_01_span">{{
                      productsGetterLimited[gridLine1Col2].name }} : {{
                          productsGetterLimited[gridLine1Col2].description }}</span></div>
                  </div>
                  <div class="contagridmarket__contener__antiquaire">
                    <div class="collection-prive-lyon"><span class="collectionprivelyon_span">Collection Privée •
                        Lyon</span></div>
                  </div>
                  <div class="contagridmarket__contener__price">
                    <div class="gridmarket__contener__amount">
                      <div class="text-650-"><span class="f50_span">{{
                        divideBy100(productsGetterLimited[gridLine1Col2].price_cents) }} €</span></div>
                    </div>
                    <div class="container_21">
                      <div data-variant="28" class="gridmarket__container__card_component_12">
                      </div>
                      <img src="../assets/icons/eye.svg" alt="eye" />
                      <div class="text-28"><span class="f8_span">28</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="`/product-detail/${gridLine1Col3}`" class="no-underline">
            <div class="background-border-shadow background-border-shadow-line1-col3">
              <div class="gridmarket__container_gradient"></div>
              <div class="gridmarket__container_line1-col3">
                <div class="gridmarket__container_background">

                  <div v-if="productsGetterLimited?.length > 0">

                    <img :src="'http://localhost:5000/static/files/' + productsGetterLimited[gridLine1Col3].photo_name"
                      :alt="productsGetterLimited[gridLine1Col3].name" class="marketplace-picture">

                  </div>
                  <div v-else class="marketplace-empty">
                    <img src="../assets/icons/camera-off-line.svg" alt="camera-off-line" class="marketplace-picture" />
                  </div>

                  <div class="gridmarket__container_background_button">
                    <div data-variant="29" class="gridmarket__container__card_component_16">
                      <div class="vector_33"></div>

                    </div>
                  </div>
                  <div class="gridmarket__container_type">
                    <div class="gridmarket__container_type_background">
                      <div class="horlogerie_01"><span class="horlogerie_01_span">Horlogerie</span></div>
                    </div>
                  </div>
                </div>
                <div class="gridmarket__contener__description">
                  <div class="gridmarket__contener__description-heading">
                    <div class="pendule-empire-bronze-dor_01"><span class="penduleempirebronzedor_01_span">{{
                      productsGetterLimited[gridLine1Col3].name }} : {{
                          productsGetterLimited[gridLine1Col3].description }}</span></div>
                  </div>
                  <div class="gridmarket__contener__description-antiquaire">
                    <div class="maison-horlogre-versailles"><span class="maisonhorlogreversailles_span">Maison Horlogère
                        • Versailles</span></div>
                  </div>
                  <div class="gridmarket__contener__description_price">
                    <div class="gridmarket__contener__description_amount">
                      <div class="text-2-100-"><span class="f100_span">{{
                        divideBy100(productsGetterLimited[gridLine1Col3].price_cents) }} €</span></div>
                    </div>
                    <div class="container_28">
                      <div data-variant="30" class="gridmarket__container__card_component_12">

                      </div>
                      <img src="../assets/icons/eye.svg" alt="eye" />
                      <div class="text-67"><span class="f7_span">67</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="`/product-detail/${gridLine2Col1}`" class="no-underline">
            <div class="background-border-shadow background-border-shadow-line2-col1">
              <div class="gridmarket__container_gradient"></div>
              <div class="gridmarket__container_line2-col1">
                <div class="gridmarket__container_background">


                  <div v-if="productsGetterLimited?.length > 0">
                    <img :src="'http://localhost:5000/static/files/' + productsGetterLimited[gridLine2Col1].photo_name"
                      :alt="productsGetterLimited[gridLine2Col1].name" class="marketplace-picture">

                  </div>
                  <div v-else class="marketplace-empty">
                    <img src="../assets/icons/camera-off-line.svg" alt="camera-off-line" class="marketplace-picture" />
                  </div>

                  <div class="gridmarket__container_background_button">
                    <div data-variant="31" class="gridmarket__container__card_component_16">
                      <div class="vector_36"></div>
                    </div>
                  </div>
                  <div class="gridmarket__container_type">
                    <div class="gridmarket__container_type_background">
                      <div class="bijoux_01"><span class="bijoux_01_span">Bijoux</span></div>
                    </div>
                  </div>
                </div>
                <div class="gridmarket__contener__description">
                  <div class="gridmarket__contener__description-heading">
                    <div class="broche-art-dco-diamants_01"><span class="brocheartdcodiamants_01_span">{{
                      productsGetterLimited[gridLine2Col1].name }} : {{
                          productsGetterLimited[gridLine2Col1].description }}</span></div>
                  </div>
                  <div class="gridmarket__contener__description-antiquaire">
                    <div class="bijoux-prcieux-cannes"><span class="bijouxprcieuxcannes_span">Bijoux Précieux •
                        Cannes</span></div>
                  </div>
                  <div class="gridmarket__contener__description_price">
                    <div class="gridmarket__contener__description_amount">
                      <div class="text-1-200-"><span class="f200_span">{{ divideBy100(
                        productsGetterLimited[gridLine2Col1].price_cents) }} €</span></div>
                    </div>
                    <div class="container_35">
                      <div data-variant="32" class="gridmarket__container__card_component_12">

                      </div>
                      <img src="../assets/icons/eye.svg" alt="eye" />
                      <div class="text-91"><span class="f1_span">91</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="`/product-detail/${gridLine2Col2}`" class="no-underline">
            <div class="background-border-shadow background-border-shadow-line2-col2">
              <div class="gridmarket__container_gradient"></div>
              <div class="gridmarket__container_line1-col2">
                <div class="gridmarket__container_background">
                  <div v-if="productsGetterLimited?.length > 0">
                    <img :src="'http://localhost:5000/static/files/' + productsGetterLimited[gridLine2Col2].photo_name"
                      :alt="productsGetterLimited[gridLine2Col2].name" class="marketplace-picture">


                  </div>
                  <div v-else class="marketplace-empty">
                    <img src="../assets/icons/camera-off-line.svg" alt="camera-off-line" class="marketplace-picture" />
                  </div>

                  <div class="gridmarket__container_background_button">
                    <div data-variant="33" class="gridmarket__container__card_component_16">
                      <div class="vector_39"></div>
                    </div>
                  </div>
                  <div class="gridmarket__container_type">
                    <div class="gridmarket__container_type_background">
                      <div class="livres"><span class="livres_span">Livres</span></div>
                    </div>
                  </div>
                </div>
                <div class="gridmarket__contener__description">
                  <div class="gridmarket__contener__description_heading">
                    <div class="collection-livres-anciens_01"><span class="collectionlivresanciens_01_span">{{
                      productsGetterLimited[gridLine2Col2].name }} : {{
                          productsGetterLimited[gridLine2Col2].description }}</span></div>
                  </div>
                  <div class="gridmarket__contener__description-antiquaire">
                    <div class="librairie-du-faubourg-bordeaux"><span class="librairiedufaubourgbordeaux_span">Librairie
                        du Faubourg • Bordeaux</span></div>
                  </div>
                  <div class="gridmarket__contener__description_price">
                    <div class="gridmarket__contener__description_amount">
                      <div class="text-890-"><span class="f90_span">{{ divideBy100(
                        productsGetterLimited[gridLine2Col2].price_cents) }} €</span></div>
                    </div>
                    <div class="container_42">
                      <div data-variant="34" class="gridmarket__container__card_component_12">

                      </div>
                      <img src="../assets/icons/eye.svg" alt="eye" />
                      <div class="text-35"><span class="f5_span">35</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
          <RouterLink :to="`/product-detail/${gridLine2Col3}`" class="no-underline">
            <div class="background-border-shadow background-border-shadow-line2-col3">
              <div class="gridmarket__container_gradient"></div>
              <div class="gridmarket__container_line2-col3">
                <div class="gridmarket__container_background">

                  <div v-if="productsGetterLimited?.length > 0">
                    <img :src="'http://localhost:5000/static/files/' + productsGetterLimited[gridLine2Col3].photo_name"
                      :alt="productsGetterLimited[gridLine2Col3].name" class="marketplace-picture">

                  </div>
                  <div v-else class="marketplace-empty">
                    <img src="../assets/icons/camera-off-line.svg" alt="camera-off-line" class="marketplace-picture" />
                  </div>

                  <div class="gridmarket__container_background_button">
                    <div data-variant="35" class="gridmarket__container__card_component_16">
                      <div class="vector_42"></div>
                    </div>
                  </div>
                  <div class="gridmarket__container_type">
                    <div class="background_11">
                      <div class="orfvrerie"><span class="orfvrerie_span">Orfèvrerie</span></div>
                    </div>
                  </div>
                </div>
                <div class="gridmarket__contener__description">
                  <div class="gridmarket__contener__description_heading">
                    <div class="chandelier-argent-massif_01"><span class="chandelierargentmassif_01_span">{{
                      productsGetterLimited[gridLine2Col3].name }} : {{
                          productsGetterLimited[gridLine2Col3].description }}</span></div>
                  </div>
                  <div class="gridmarket__contener__description-antiquaire">
                    <div class="orfvrerie-ancienne-nancy"><span class="orfvrerieanciennenancy_span">Orfèvrerie Ancienne
                        • Nancy</span></div>
                  </div>
                  <div class="gridmarket__contener__description_price">
                    <div class="gridmarket__contener__description_amount">
                      <div class="text-750-"><span class="f50_span_01">{{
                        divideBy100(productsGetterLimited[gridLine2Col3].price_cents) }} €</span></div>
                    </div>
                    <div class="container_49">
                      <div data-variant="36" class="gridmarket__container__card_component_12">

                      </div>
                      <img src="../assets/icons/eye.svg" alt="eye" />
                      <div class="text-22"><span class="f2_span_01">22</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
        <div class="grid__actionmore">
          <div class="gridmarket__container_background_button_yellow">
            <RouterLink to="/products" class="no-underline">
              <div class="voir-plus-dantiquits"><span class="voirplusdantiquits_span">Voir plus d'antiquités</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="value__statements">
      <div class="value__statements__container">
        <div class="value__statements__cards">
          <div class="value__statements__cards_text1">
            <div class="value__statements__cards_text-pourquoi"><span
                class="value__statements__cards_text-pourquoi-span">Pourquoi nous
                faire confiance ?</span></div>
          </div>
          <div class="value__statements__cards_text2">
            <div class="value__statements__cards_text_market">
              <span class="value__statements__cards_text_market-span">Market
                Hall s'engage à offrir une expérience d'achat et de vente sécurisée pour tous les passionnés
                d'antiquités</span>
            </div>
          </div>
          <div class="value__statements__cards_txt3">
            <div class="value__statements__cards_background_border_shadow">
              <div class="value__statements__cards_background__container_txt_3">
                <div class="overlay">
                  <div data-variant="37" class="value__statements__cards_component_24">
                    <img src="../assets/icons/auth.svg" alt="authentification garantie" class="vector__auth_end" />
                  </div>
                </div>
                <div class="value__statements__cards_heading">
                  <div class="authentification-garantie"><span
                      class="authentificationgarantie_span">Authentification<br />garantie</span></div>
                </div>
                <div class="value__statements__cards_background_txt">
                  <div class="value__statements__cards_background_txt_specialite"><span
                      class="value__statements__cards_background_txt_specialite_span">Chaque pièce
                      est<br />expertisée par nos<br />spécialistes certifiés<br />avant mise en vente</span></div>
                </div>
              </div>
              <div class="gridmarket__container_gradient_end"></div>
            </div>
            <div class="value__statements__cards_background_border_shadow">
              <div class="value__statements__cards_background__container">
                <div class="overlay_01">
                  <div data-variant="38" class="value__statements__cards_component_24">

                    <img src="../assets/icons/quality.svg" alt="Qualite certifie" class="vector__quality_end" />

                  </div>
                </div>
                <div class="value__statements__cards_heading">
                  <div class="qualit-certifie"><span class="qualitcertifie_span">Qualité certifiée</span></div>
                </div>
                <div class="value__statements__cards_background_txt">
                  <div class="value__statements__cards_processus"><span
                      class="value__statements__cards_processus-span">Processus rigoureux
                      de<br />sélection et certification<br />de l'état des antiquités</span></div>
                </div>
              </div>
              <div class="gridmarket__container_gradient_end"></div>
            </div>
            <div class="value__statements__cards_background_border_shadow">
              <div class="value__statements__cards_background__container">
                <div class="overlay_02">
                  <div data-variant="39" class="value__statements__cards_component_24">
                    <img src="../assets/icons/seller.svg" alt="nb antiquaires" class="vector__seller_end" />


                  </div>
                </div>
                <div class="value__statements__cards_heading">
                  <div class="vendeurs-vrifis"><span class="vendeursvrifis_span">Vendeurs vérifiés</span></div>
                </div>
                <div class="value__statements__cards_background_txt">
                  <div class="value__statements__cards_background_txt_antiquaire"><span
                      class="value__statements__cards_background_txt_antiquaire_span">Tous nos antiquaires<br />sont
                      vérifiés et évalués<br />par la communauté</span></div>
                </div>
              </div>
              <div class="gridmarket__container_gradient_end"></div>
            </div>
            <div class="value__statements__cards_background_border_shadow">
              <div class="value__statements__cards_background__container">
                <div class="overlay_03">
                  <div data-variant="40" class="value__statements__cards_component_24">
                    <img src="../assets/icons/payment.svg" alt="paiement" class="vector__payment_end" />

                  </div>
                </div>
                <div class="value__statements__cards_background_heading">
                  <div class="paiement-scuris"><span class="paiementscuris_span">Paiement sécurisé</span></div>
                </div>
                <div class="value__statements__cards_background_txt">
                  <div class="value__statements__cards_background_txt-transaction"><span
                      class="value__statements__cards_background_txt-transaction_span">Transactions protégées<br />avec
                      possibilité de retour<br />sous 14 jours</span></div>
                </div>
              </div>
              <div class="gridmarket__container_gradient_end"></div>
            </div>
          </div>
        </div>
        <div class="value__statements__number">
          <div class="value__statements__number_container">
            <div class="value__statements__number_container_qte">
              <div class="text-10000"><span class="f0000_span">10,000+</span></div>
            </div>
            <div class="value__statements__number_container_qte">
              <div class="antiquaires-partenaires"><span class="antiquairespartenaires_span">Antiquaires
                  partenaires</span></div>
            </div>
          </div>
          <div class="value__statements__number_container">
            <div class="value__statements__number_container_qte">
              <div class="text-50000"><span class="f0000_span_01">50,000+</span></div>
            </div>
            <div class="value__statements__number_container_qte">
              <div class="pices-authentifies"><span class="picesauthentifies_span">Pièces authentifiées</span></div>
            </div>
          </div>
          <div class="value__statements__number_container">
            <div class="value__statements__number_container_qte">
              <div class="text-98"><span class="f8_span_01">98%</span></div>
            </div>
            <div class="value__statements__number_container_qte">
              <div class="satisfaction-client"><span class="satisfactionclient_span">Satisfaction client</span></div>
            </div>
          </div>
          <div class="value__statements__number_container">
            <div class="value__statements__number_container_qte">
              <div class="text-24h"><span class="f4h_span">24h</span></div>
            </div>
            <div class="value__statements__number_container_qte">
              <div class="temps-de-rponse-moyen"><span class="tempsderponsemoyen_span">Temps de réponse moyen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__landing">
      <div class="footer__container_landing">
        <div class="footer__container_landing_list">
          <div class="footer__list">
            <div class="footer__part__un">
              <div class="footer__margin">
                <div class="footer__background__border__shadow__logo">
                  <div class="footer__logo">
                    <div class="mh"><span class="mh_span">MH</span></div>
                    <img src="../assets/icons/logo.svg" alt="logo" class="mh_span" />
                  </div>
                </div>
              </div>
              <div class="footer__list_paragraph">
                <div class="market"><span class="market_span">Market</span></div>
                <div class="hall"><span class="hall_span">Hall</span></div>
              </div>
            </div>
            <div class="footer__part__deux">
              <div
                class="footer__part__deux_txt">
                <span
                  class="footer__part__deux_txt_span">Le
                  marketplace de référence pour les antiquités<br />authentiques. Connecter les passionnés du
                  monde<br />entier.</span>
              </div>
            </div>
            <div class="footer__part__trois">
              <div class="buttonmargin">
                <div class="button_21">
                  <div data-variant="41" class="footer__part__component_16">
                    <a href="https://facebook.com" target="_blank" class="social-link" title="Facebook">
                      <img src="../assets/icons/socials/facebook.svg" alt="facebook" class="vector__facebook" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="buttonmargin_01">
                <div class="button_22">
                  <div data-variant="42" class="footer__part__component_16">
                    <a href="https://instagram.com" target="_blank" class="social-link" title="Facebook">

                      <img src="../assets/icons/socials/instagram.svg" alt="instagram" class="vector__instagram" />
                    </a>

                  </div>
                </div>
              </div>
              <div class="button_23">
                <div data-variant="43" class="footer__part__component_16">
                  <a href="https://twitter.com" target="_blank" class="social-link" title="Facebook">

                    <img src="../assets/icons/socials/twitter.svg" alt="twitter" class="vector__twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__colonnes">
            <div class="footer__colonnes_heading">
              <div class="marketplace_01"><span class="marketplace_01_span">Marketplace</span></div>
            </div>
            <div class="footer__colonnes__item">
              <div class="item">
                <div class="link-explorer"><span class="linkexplorer_span">Explorer</span></div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-catgories"><span class="linkcatgories_span">Catégories</span></div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-pices-dexception"><span class="linkpicesdexception_span">Pièces d'exception</span>
                </div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-nouveauts"><span class="linknouveauts_span">Nouveautés</span></div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-favoris"><span class="linkfavoris_span">Favoris</span></div>
              </div>
            </div>
          </div>
          <div class="footer__colonnes">
            <div class="footer__colonnes_heading">
              <div class="footer__colonnes_seller"><span class="footer__colonnes_seller_span">Vendeurs</span></div>
            </div>
            <div class="footer__colonnes__list">
              <div class="footer__colonnes__item">
                <div class="link-commencer-vendre"><span class="linkcommencervendre_span">Commencer à vendre</span>
                </div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-guide-du-vendeur"><span class="linkguideduvendeur_span">Guide du vendeur</span></div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-frais-et-commission"><span class="linkfraisetcommission_span">Frais et
                    commission</span></div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-outils-vendeur"><span class="linkoutilsvendeur_span">Outils vendeur</span></div>
              </div>
              <div class="footer__colonnes__item">
                <div class="link-support"><span class="linksupport_span">Aide et assistance</span></div>
              </div>
            </div>
          </div>
          <div class="footer__colonnes">
            <div class="footer__heading-newsletter">
              <div class="newsletter"><span class="newsletter_span">Newsletter</span></div>
            </div>
            <div class="footer__colonne__newsletter">
              <div class="recevez-les-dernires-nouveauts-et-pices-dexception"><span
                  class="recevezlesderniresnouveautsetpicesdexception_span">Recevez les dernières nouveautés et pièces
                  d'exception</span></div>
            </div>
            <div class="footer__newsletter__mail">
              <div class="footer__newsletter__input">
                <div class="footer__newsletter__mail__input">
                  <div class="votre-email">
                    <span class="votreemail_span">
                      <input type="email" v-model="userEmail" class="input-email" placeholder="Votre email" />
                    </span>
                    <p>Email saisi : {{ userEmail }}</p>
                  </div>
                </div>
              </div>
              <div class="button_24">
                <div data-variant="44" class="footer__part__component_16">
                  <RouterLink to="/contactus'" class="no-underline">
                    <img src="../assets/icons/mailbox.svg" alt="boite au lettre" class="vector__mailbox" />

                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__horizontal-divider"></div>
        <div class="footer__horizontal__list">
          <div class="footer__horizontal__link">
            <div class="footer__link">
              <div class="footer__horizontal_conditions"><span class="footer__horizontal_condition_span">Conditions
                  d'utilisation</span></div>
            </div>
            <div class="footer__link">
              <div class="footer__horizontal_conditions"><span class="footer__horizontal_condition_span">Politique de
                  confidentialité</span></div>
            </div>
            <div class="footer__link">
              <div class="footer__horizontal_conditions"><span class="footer__horizontal_condition_span">Mentions
                  légales</span></div>
            </div>
            <div class="footer__link">
              <div class="footer__horizontal_conditions"><span class="footer__horizontal_condition_span">Contact</span>
              </div>
            </div>
          </div>
          <div class="footer__droits__reserve">
            <div class="footer__droits__reserve_txt"><span class="footer__droits__reserve_span">©
                2025 Market Hall. Tous droits réservés.</span></div>
          </div>
        </div>
      </div>
    </div>
    <div data-headstate="Default" class="header__landing">
      <div class="header__landing__container__logo">
        <div class="header__landing__logo">
          <div class="header__landing__logo__type">
            <div class="header__landing__logo__type_mh"><span class="header__landing__logo__type_mh_span">MH</span></div>
          </div>
        </div>
        <div class="usermenu">
          <div class="wishlist">
            <div class="button_25">
              <div data-variant="45" class="header__landing__component-15">
                <div class="header__landing__component_v7"></div>
              </div>
            </div>
          </div>

          <div class="usercart">
            <div class="button_26">
              <div data-variant="46" class="header__landing__component-15">
                <div class="header__landing__component_v5"></div>
                <div class="header__landing__component_v6"></div>
              </div>
            </div>
          </div>
          <div class="useraccount">
            <div class="button_useraccount">
              <div data-variant="47" class="header__landing__component-15">

                <div class="header__landing__component_v3"></div>
                <div class="header__landing__component_v4"></div>
              </div>
            </div>
          </div>
        </div>
        <div data-variant="45" class="header__landing__component-22">

          <div class="header__landing__component_v1"></div>
          <div class="header__landing__component_v2"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from 'vue'
import { gsap } from 'gsap'
import { useProductsStore } from "../stores/products-store"
import { storeToRefs } from "pinia"


const productsStore = useProductsStore()
const { getProductByNb } = productsStore
const { productsGetterLimited } = storeToRefs(productsStore)




// References
const carouselWrapper = ref<HTMLElement>()
const carouselTrack = ref<HTMLElement>()
const slideRefs = ref<HTMLElement[]>([])
const prevButton = ref<HTMLElement>()
const nextButton = ref<HTMLElement>()
const userEmail = ref<string>('')
const selectedId = computed(() => currentSlide.value);
// State
const currentSlide = ref(0)
const slideWidth = ref(0)

// Currently we start with 0 
const gridLine1Col1 = 0;
const gridLine1Col2 = 1;
const gridLine1Col3 = 2;
const gridLine2Col1 = 3;
const gridLine2Col2 = 4;
const gridLine2Col3 = 5;



// GSAP Variables 
let autoPlayInterval: NodeJS.Timeout | null = null
let tl: gsap.core.Timeline



//const randomSelectedId = 0;  //Math.floor(Math.random() * productsGetterLimited.value.length) + 1;


// Calculated 
const calculateSlideWidth = () => {
  if (carouselWrapper.value) {
    slideWidth.value = carouselWrapper.value.offsetWidth
  }
}

// Transition of Animation 
const animateToSlide = (slideIndex: number, direction: 'next' | 'prev' = 'next') => {

  if (!carouselTrack.value) return

  const targetX = -slideIndex * slideWidth.value

  // Main Animation 
  gsap.to(carouselTrack.value, {
    x: targetX,
    duration: 0.8,
    ease: "power2.inOut"
  })


}

// Navigation
const nextSlide = () => {
  const nextIndex = (currentSlide.value + 1) % productsGetterLimited.value.length
  currentSlide.value = nextIndex
  animateToSlide(nextIndex, 'next')
}

const prevSlide = () => {
  const prevIndex = (currentSlide.value - 1 + productsGetterLimited.value.length) % productsGetterLimited.value.length
  currentSlide.value = prevIndex
  animateToSlide(prevIndex, 'prev')
}

const goToSlide = (index: number) => {
  const direction = index > currentSlide.value ? 'next' : 'prev'
  currentSlide.value = index
  animateToSlide(index, direction)
}

const startAutoPlay = () => {
  //  if (autoPlayInterval) clearInterval(autoPlayInterval)
  //  autoPlayInterval = setInterval(nextSlide, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    //  clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}


const handleResize = () => {
  calculateSlideWidth()
  animateToSlide(currentSlide.value)
}

onMounted(async () => {

  await nextTick()
  await getProductByNb(5)

  calculateSlideWidth()

  tl = gsap.timeline()

  tl.from('.title', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  })

    .from(carouselWrapper.value, {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)"
    }, "-=0.5")

    .from('.carousel-controls', {
      duration: 0.6,
      y: 30,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.3")

    .from('.controls', {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.3")

  if (prevButton.value && nextButton.value) {
    [prevButton.value, nextButton.value].forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" })
      })

      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })
  }

  animateToSlide(0)

  //startAutoPlay()

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('resize', handleResize)
  if (tl) tl.kill()
})



const title = "Market Hall";
const description =
  "Découvrez des antiquités authentiques et des pièces d'exception";
const collectionText = "Explorer la Collection";
// Static data
const exampleText =
  "Trouver un objet ancien exceptionnelle";
const exampleText2 =
  "En saisissant Table type Louis XVI dans la barre de recherche, vous trouverez des tables de ce type avec les Prix proposés par les particuliers (commission incluse).";

const socialComment1 = "Franck D. 75 : Au cours de plusieurs années de chine d’antiquités en tous genres, j’ai connu bon nombre de désillusions sur l’authenticité des pièces achetées. En rencontrant Mr Gérard Rigot, j’ai découvert un marchand aux qualités rarement associées : expertise, courtoisie, honnêteté, intérêt de la belle vente plutôt que de son montant, me faisant ainsi changer de regard sur le monde des marchands d’objets d’art ancien.";


function divideBy100(montantString) {
  const montant = parseFloat(montantString);
  if (isNaN(montant)) {
    return '<span style="color: red;">Erreur : Montant invalide</span>';
  }
  const resultat = montant / 100;
  return `${resultat}`;
}

</script>

<style scoped>
:root {
  --color-grey-95: #F6F3EE;
  --color-orange-20: #3A342E;
  --color-orange-44-2p: rgba(139, 115, 85, 0.02);
  --color-yellow-52: #D4AF37;
  --color-yellow-52-0p: rgba(212, 175, 55, 0);
  --color-yellow-52-2p: rgba(212, 175, 55, 0.02);
  --color-yellow-52-30p: rgba(212, 175, 55, 0.30);
  --color-yellow-52-20p: rgba(212.01, 174.99, 54.98, 0.20);

  --color-white--80p: rgba(255, 254.99, 254.98, 0.80);
}


.hero__title_span_white {
  color: var(--color-grey-95, #F6F3EE);

}

.hero__title_span_yellow {
  color: var(--color-yellow-52, #D4AF37);

}

.hero__title {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  font-size: 66.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 72px;
  word-wrap: break-word;
  text-shadow: 0px 1px 2px rgba(44, 37, 31, 0.10);
}

.hero__subtitle__span {
  color: var(--color-orange-68, #C4B895);
  font-size: 22.12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
}

.hero__subtitle {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vector__auth {
  width: 18px;
  height: 18px;
  left: 2px;
  position: absolute;
  /*  outline: 1.33px var(--color-yellow-52, #D4AF37) solid;*/
  /*  outline-offset: -0.67px;*/
}

.hero__props__single__value__span {
  color: var(--color-orange-68, #C4B895);
  font-size: 13.12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.hero__props__single__value__str {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vector__seller {
  width: 18px;
  height: 18px;
  left: 3px;
  position: absolute;

}


.vector__payment {
  width: 18px;
  height: 18px;
  position: absolute;
}



.hero__cta__seller__span {
  color: var(--color-orange-9, #1A1612);
  font-size: 16.88px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  word-wrap: break-word;
}

.hero__cta__seller {
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
}

.vector__arrow {
  width: 4.67px;
  height: 9.33px;
  left: 8px;
  top: 3.33px;
  position: absolute;
}

.hero__cta__browse__span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 17.02px;
  font-family: Inter;
  font-weight: 500;
  line-height: 28px;
  word-wrap: break-word;
}

.hero__cta__browse {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.button {
  width: 8px;
  height: 8px;
  background: var(--color-yellow-52, #D4AF37);
  border-radius: 33554400px;
}

.button_01 ,
.button_02 ,
.button_03 {
  width: 8px;
  height: 8px;
  background: var(--color-orange-20, #3A342E);
  border-radius: 33554400px;
}

.secrtaire-louis-xvi-en-marqueterie {
  width: 100%;
  height: 422px;
  max-width: 424px;
  position: relative;
}

.vector__heart {
  width: 18px; 
  height: 18px; 
  position: absolute;
}

.hero__carousel__description-name_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 22.12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
}

.hero__carousel__description-name {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.product_periodstring_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.product_periodstring {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.product__seller_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 15.12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.product__seller {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.product__price_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 26.37px;
  font-family: Inter;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

.product__price {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vector_10 {
  width: 13.33px;
  height: 9.33px;
  left: 1.33px;
  top: 3.33px;
  position: absolute;
  outline: 1.33px var(--color-orange-68, #C4B895) solid;
  outline-offset: -0.67px;

  width: 4px;
  height: 4px;
  left: 6px;
  top: 6px;
  position: absolute;
  outline: 1.33px var(--color-orange-68, #C4B895) solid;
  outline-offset: -0.67px;
}

.product__statsstring_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.product__statsstring {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}



.vector__heart_fav {
  width: 13.33px;
  height: 11.34px;
  left: 1.33px;
  top: 2.66px;
  position: absolute;

}

.product__statsstring_01_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.69px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.product__statsstring_01 {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.buttontext_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 13.12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.product__actionseller_buttontext {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.buttontext_01_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 13.12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.notreslection_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 28.01px;
  font-family: Inter;
  font-weight: 500;
  line-height: 36px;
  word-wrap: break-word;
}

.notre-slection {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.hero__carousel__select--text {
  color: var(--color-orange-68, #C4B895);
  font-size: 14.75px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.hero__carousel__select--span {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}



.gridmarket__marketplace_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 28.36px;
  font-family: Inter;
  font-weight: 500;
  line-height: 36px;
  word-wrap: break-word;
}

.gridmarket__marketplace {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.gridmarket__container__card__heading__container-authentifies-span {
  color: var(--color-orange-68, #C4B895);
  font-size: 14.75px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.gridmarket__container__card__heading__container-authentifies {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vector_filter {
  width: 13.33px;
  height: 12.67px;
  left: 1.33px;
  top: 2px;
  position: absolute;
  /*
  outline: 1.33px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.67px;
*/
}

.filtres_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 12.91px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.filtres {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vector_grid {
  width: 12px;
  height: 12px;
  left: 2px;
  top: 2px;
  position: absolute;
  /*
  outline: 1.33px var(--color-orange-9, #1A1612) solid;
  outline-offset: -0.67px;
*/
}

.tous_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 12.58px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.tous {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.mobilier_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 13.89px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.mobilier {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.bijoux_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 13.56px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.bijoux {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.artdcoratif_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 13.34px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.art-dcoratif {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.horlogerie_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 13.56px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.horlogerie {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.peinture_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 13.23px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.peinture {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.luminaires_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 13.23px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.luminaires {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
 
.marketplace-picture {
  width: 100%;
  height: 483px;
  max-width: 483px;
  position: relative;
  background-color: white;
}


.mobilier_01_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 11.62px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.mobilier_01 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.commodetransitionlouisxv_01_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.commode-transition-louis-xv_01 {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.antiquitsmartinparis_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.91px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.antiquits-martin-paris {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f890_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 18.28px;
  font-family: Inter;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

.text-1-890- {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f2_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 10.50px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.text-42 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.gridmarket__container_gradient  {
  width: 483.33px;
  height: 627.34px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: linear-gradient(128deg, var(--color-yellow-52-2p, rgba(212, 175, 55, 0.02)) 0%, var(--color-yellow-52-0p, rgba(212, 175, 55, 0)) 50%, var(--color-orange-44-2p, rgba(139, 115, 85, 0.02)) 100%);
}

.vector_30 {
  width: 13.33px;
  height: 11.34px;
  left: 1.33px;
  top: 2.66px;
  position: absolute;
  outline: 1.33px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.67px;
}

.artdcoratif_01_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 11.06px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.art-dcoratif_01 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vasegallartnouveau_01_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.75px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.vase-gall-art-nouveau_01 {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.collectionprivelyon_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.collection-prive-lyon {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f50_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 17.34px;
  font-family: Inter;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

.text-650- {
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.f8_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 10.69px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.text-28 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}



.vector_33 {
  width: 13.33px;
  height: 11.34px;
  left: 1.33px;
  top: 2.66px;
  position: absolute;
  outline: 1.33px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.67px;
}

.horlogerie_01_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 11.44px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.horlogerie_01 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.penduleempirebronzedor_01_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.pendule-empire-bronze-dor_01 {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.maisonhorlogreversailles_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.91px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.maison-horlogre-versailles {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f100_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 18.28px;
  font-family: Inter;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

.text-2-100- {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f7_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 10.88px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.text-67 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.vector_36 {
  width: 13.33px;
  height: 11.34px;
  left: 1.33px;
  top: 2.66px;
  position: absolute;
  outline: 1.33px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.67px;
}

.bijoux_01_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 11.25px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.bijoux_01 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.brocheartdcodiamants_01_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.88px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.broche-art-dco-diamants_01 {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.bijouxprcieuxcannes_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.69px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.bijoux-prcieux-cannes {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f200_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 18.28px;
  font-family: Inter;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

.text-1-200- {
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.f1_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.text-91 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}



.vector_39 {
  width: 13.33px;
  height: 11.34px;
  left: 1.33px;
  top: 2.66px;
  position: absolute;
  outline: 1.33px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.67px;
}

.livres_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 10.50px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.livres {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.collectionlivresanciens_01_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.75px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.collection-livres-anciens_01 {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.librairiedufaubourgbordeaux_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.91px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.librairie-du-faubourg-bordeaux {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f90_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 17.34px;
  font-family: Inter;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

.text-890- {
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.f5_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 10.50px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.text-35 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.vector_42 {
  width: 13.33px;
  height: 11.34px;
  left: 1.33px;
  top: 2.66px;
  position: absolute;
  outline: 1.33px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.67px;
}

.orfvrerie_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 11.06px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.orfvrerie {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.chandelierargentmassif_01_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.75px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.chandelier-argent-massif_01 {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.orfvrerieanciennenancy_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.orfvrerie-ancienne-nancy {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f50_span_01 {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 17.66px;
  font-family: Inter;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
}

.text-750- {
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.f2_span_01 {
  color: var(--color-orange-68, #C4B895);
  font-size: 10.69px;
  font-family: Inter;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
}

.text-22 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.voirplusdantiquits_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 13.45px;
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.voir-plus-dantiquits {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.value__statements__cards_text-pourquoi-span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 28.01px;
  font-family: Inter;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

.value__statements__cards_text-pourquoi {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.value__statements__cards_text_market-span {
  color: var(--color-orange-68, #C4B895);
  font-size: 14.75px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.value__statements__cards_text_market {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vector__auth_end {
  width: 16px;
  height: 20px;
  left: 4px;
  top: 2px;
  position: absolute;
  /*
  outline: 2px var(--color-yellow-52, #D4AF37) solid;
  outline-offset: -1px;
*/
}

.authentificationgarantie_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 15px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.authentification-garantie {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.value__statements__cards_background_txt_specialite_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.69px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.value__statements__cards_background_txt_specialite {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.vector__quality_end {
  width: 16px;
  height: 20px; 
  left: 7px; 
  top: 2px;
  position: absolute;
  /*
  outline: 2px var(--color-yellow-52, #D4AF37) solid;
  outline-offset: -1px;
  */
}


.qualitcertifie_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.75px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.qualit-certifie {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.value__statements__cards_processus-span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.value__statements__cards_processus{
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.gridmarket__container_gradient_end {
  width: 204px;
  height: 248px;
  left: 1px;
  top: 1px;
  position: absolute;
  background: linear-gradient(129deg, var(--color-yellow-52-2p, rgba(212, 175, 55, 0.02)) 0%, var(--color-yellow-52-0p, rgba(212, 175, 55, 0)) 50%, var(--color-orange-44-2p, rgba(139, 115, 85, 0.02)) 100%);
}

.vector__seller_end {
  width: 16px;
  height: 20px;
  left: 2px;
  top: 15px;
  position: absolute;
  /*
  outline: 2px var(--color-yellow-52, #D4AF37) solid;
  outline-offset: -1px;
  */
}

.vendeursvrifis_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.50px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.vendeurs-vrifis {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.value__statements__cards_background_txt_antiquaire_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.value__statements__cards_background_txt_antiquaire {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
 

.vector__payment_end {
  width: 20px;
  height: 20px;
  left: 12px;
  top: 6px;
  position: absolute;
  /*
  outline: 2px var(--color-yellow-52, #D4AF37) solid;
  outline-offset: -1px;
*/
}


.paiementscuris_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.50px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.paiement-scuris {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.value__statements__cards_background_txt-transaction_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.value__statements__cards_background_txt-transaction {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

 

.f0000_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 28.01px;
  font-family: Inter;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

.text-10000 {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.antiquairespartenaires_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.antiquaires-partenaires {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f0000_span_01 {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 26.95px;
  font-family: Inter;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

.text-50000 {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.picesauthentifies_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.69px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.pices-authentifies {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f8_span_01 {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 27.77px;
  font-family: Inter;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

.text-98 {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.satisfactionclient_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.satisfaction-client {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.f4h_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 27.07px;
  font-family: Inter;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
}

.text-24h {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.tempsderponsemoyen_span {
  color: var(--color-orange-68, #C4B895);
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.temps-de-rponse-moyen {
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.mh_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 14px;
  font-family: Inter;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.70px;
  word-wrap: break-word;
}

.mh {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.market_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 22.50px;
  font-family: Inter;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
}

.market {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.hall_span {
  color: var(--color-yellow-52, #D4AF37);
  font-size: 22.88px;
  font-family: Inter;
  font-weight: 600;
  line-height: 32px;
  word-wrap: break-word;
}

.hall {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.footer__part__deux_txt_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 12.91px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.footer__part__deux_txt {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.vector__facebook {
  width: 32px;
  height: 32px;
  left: 4.67px;
  top: 1.33px;
  position: absolute;


}

.vector__instagram {
  width: 32px;
  height: 32px;
  left: 1.33px;
  top: 1.33px;
  position: absolute;

}

.vector__twitter {
  width: 32px;
  height: 32px;
  left: 1.33px;
  top: 2.66px;
  position: absolute; 
  /*
  outline: 1.33px var(--color-grey-95-80%, rgba(246.01, 242.96, 237.96, 0.80)) solid;
  outline-offset: -0.67px;
*/
}

.marketplace_01_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.88px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.marketplace_01 {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkexplorer_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 12.91px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-explorer {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkcatgories_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-catgories {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkpicesdexception_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-pices-dexception {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linknouveauts_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-nouveauts {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkfavoris_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 12.58px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-favoris {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.footer__colonnes_seller_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.62px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.footer__colonnes_seller {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkcommencervendre_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-commencer-vendre {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkguideduvendeur_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 13.12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-guide-du-vendeur {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkfraisetcommission_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 12.91px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-frais-et-commission {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linkoutilsvendeur_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 13.12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-outils-vendeur {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.linksupport_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 13.02px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.link-support {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.newsletter_span {
  color: var(--color-grey-95, #F6F3EE);
  font-size: 14.62px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.newsletter {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.recevezlesderniresnouveautsetpicesdexception_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.recevez-les-dernires-nouveauts-et-pices-dexception {
  align-self: stretch;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.votreemail_span {
  color: inherit;
  font-size: 13.23px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
}

.votre-email {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.footer__horizontal-divider {
  align-self: stretch;
  height: 2px;
  background: var(--color-grey-95-20p, rgba(246.01, 242.96, 237.96, 0.20));
}

.footer__horizontal_conditions {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.footer__horizontal_condition_span {
  color: var(--color-grey-95-80p, rgba(246.01, 242.96, 237.96, 0.80));
  font-size: 13.12px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.footer__droits__reserve_span {
  color: var(--color-grey-95-60p, rgba(246.01, 242.96, 237.96, 0.60));
  font-size: 12.80px;
  font-family: Inter;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

.footer__droits__reserve_txt {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.header__landing__logo__type_mh_span {
  color: var(--color-orange-9, #1A1612);
  font-size: 13.30px;
  font-family: Inter;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.67px;
  word-wrap: break-word;
}

.header__landing__logo__type_mh {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.header__landing__component_v7 {
  width: 12.67px;
  height: 10.78px;
  left: 1.27px;
  top: 2.52px;
  position: absolute;
  outline: 1.27px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.63px;
}

.header__landing__component_v5 {
  width: 5.07px;
  height: 2.53px;
  left: 5.07px;
  top: 6.33px;
  position: absolute;
  outline: 1.27px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.63px;
}

.header__landing__component_v6 {
  width: 11.40px;
  height: 12.67px;
  left: 1.90px;
  top: 1.27px;
  position: absolute;
  outline: 1.27px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.63px;
}

.header__landing__component_v3 {
  width: 8.87px;
  height: 3.80px;
  left: 3.17px;
  top: 9.50px;
  position: absolute;
  outline: 1.27px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.63px;
}

.header__landing__component_v4 {
  width: 5.07px;
  height: 5.07px;
  left: 5.07px;
  top: 1.90px;
  position: absolute;
  outline: 1.27px var(--color-grey-95, #F6F3EE) solid;
  outline-offset: -0.63px;
}

.header__landing__component_v1 {
  width: 3.98px;
  height: 3.98px;
  left: 15.27px;
  top: 15.27px;
  position: absolute;
  outline: 2px var(--color-orange-68, #C4B895) solid;
  outline-offset: -1px;
}

.header__landing__component_v2 {
  width: 14.67px;
  height: 14.67px;
  left: 2.75px;
  top: 2.75px;
  position: absolute;
  outline: 2px var(--color-orange-68, #C4B895) solid;
  outline-offset: -1px;
}

.hero__heading {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: flex;
}

.hero__call__browse {
  height: 40px;
  padding-left: 33px;
  padding-right: 33px;
  padding-top: 17px;
  padding-bottom: 17px;
  background: var(--color-orange-14, #2A241E);
  box-shadow: 0px 2px 10px rgba(44, 37, 31, 0.08);
  border-radius: 10px;
  outline: 1px var(--color-yellow-52, #D4AF37) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.proudct_periodoverlay {
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 3.50px;
  padding-bottom: 3.50px;
  background: var(--color-yellow-52-10p, rgba(212.01, 174.99, 54.98, 0.10));
  border-radius: 33554400px;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
}

.product__actiondetails {
  height: 36px;
  padding-top: 7.50px;
  padding-bottom: 8.50px;
  padding-left: 16px;
  padding-right: 16px;
  background: var(--color-yellow-52, #D4AF37);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.product__actionseller {
  height: 36px;
  padding-top: 7.50px;
  padding-bottom: 8.50px;
  padding-left: 17px;
  padding-right: 17px;
  background: var(--color-orange-9, #1A1612);
  border-radius: 10px;
  outline: 1px var(--color-yellow-52, #D4AF37) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.carousel__marquee {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.gridmarket__container__card__heading {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.gridmarket__container__card__heading__container {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.gridmarket__button_yellow {
  height: 32px;
  padding-top: 5.50px;
  padding-bottom: 6.50px;
  padding-left: 12px;
  padding-right: 12px;
  background: var(--color-yellow-52, #D4AF37);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.gridmarket__button_black  {
  height: 32px;
  padding-top: 5.50px;
  padding-bottom: 6.50px;
  padding-left: 13px;
  padding-right: 13px;
  background: var(--color-orange-9, #1A1612);
  border-radius: 10px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
}
 

.gridmarket__contener__description-heading {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.gridmarket__contener__description-antiquaire {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}
  
.contagridmarket__contener__antiquaire {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.gridmarket__contener__amount {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
} 

.gridmarket__container_type_background {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: var(--color-yellow-52, #D4AF37);
  border-radius: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.gridmarket__contener__description_heading {
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}
 
.gridmarket__contener__description_amount {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}
 
.background_11 {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: var(--color-yellow-52, #D4AF37);
  border-radius: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}
 
 

.gridmarket__container_background_button_yellow {
  height: 36px;
  padding-top: 7.50px;
  padding-bottom: 8.50px;
  padding-left: 17px;
  padding-right: 17px;
  background: var(--color-orange-9, #1A1612);
  border-radius: 10px;
  outline: 1px var(--color-yellow-52, #D4AF37) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}


.value__statements__cards_text1,
.value__statements__cards_text2 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.value__statements__cards_heading {
  width: 156px;
  left: 24px;
  top: 88px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}
  
.value__statements__cards_background_heading {
  width: 156px;
  left: 24px;
  top: 88px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.value__statements__cards_background_txt {
  width: 156px;
  left: 24px;
  top: 120px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}
 
.value__statements__number_container_qte {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.footer__logo {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.footer__list_paragraph {
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  display: flex;
}

.footer__part__deux {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.footer__colonnes_heading   {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.footer__colonnes__item {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.footer__colonne__newsletter,
.footer__heading-newsletter {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.footer__newsletter__mail__input {
  height: 19px;
  padding-right: 200px;
  left: 13px;
  top: 8.50px;
  position: absolute;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.footer__link {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.header__landing__logo__type,
.footer__droits__reserve {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}


.hero__props__single__svgprop {
  width: 16px;
  height: 16px;
  position: relative;
}



.carousel-progression-buttons {
  width: 896px;
  left: 0px;
  top: 532px;
  position: absolute;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
}
 

.product__statsicon_01 {
  width: 16px;
  height: 16px;
  position: relative;
}

.vector__right_carousel,
.vector__left_carousel {
  width: 38;
  height: 32;
   
  left: 6px;
  top: 4px;

  position: absolute;

}

.backward,
.forward {
  width: 38;
  height: 32;
  opacity: 1;
  padding-top: 1px;
  padding-right: 11px;
  padding-bottom: 1px;
  padding-left: 11px;
  border-width: stroke weight/1;
  border-radius: 10px;
  width: 16px;
  height: 16px;
  position: relative;
  cursor: pointer;
  /*  border-top: 1px solid var(--color-yellow-5230, #D4AF374D)*/
}


.gridmarket__container__card_component-filter {
  width: 16px;
  flex: 1 1 0;
  position: relative;
}

.gridmarket__container__card_component-camera,
.gridmarket__container__card_component-list,
.gridmarket__container__card_component-grid {
  width: 16px;
  height: 16px;
  position: relative;
}


.gridmarket__container__card_component_12 {
  width: 12px;
  height: 12px;
  position: relative;
}

.hero__container__component_16,
.gridmarket__container__card_component_16  {
  width: 16px;
  height: 16px;
  position: relative;
}


.value__statements__cards_component_24 {
  width: 24px;
  height: 24px;
  position: relative;
}


.footer__part__component_16 {
  width: 16px;
  height: 16px;
  position: relative;
}

 
.header__landing__component-15 {
  width: 15.20px;
  height: 15.20px;
  position: relative;
}

.header__landing__component-22 {
  width: 22px;
  height: 22px;
  left: 674px;
  top: 16.84px;
  position: absolute;
}

.product__action {
  align-self: stretch;
  padding-top: 2px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
}

.gridmarket__container__card__header {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
}

.gridmarket__container__label {
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
  
.gridmarket__container_type {
  padding-top: 1px;
  left: 12px;
  top: 447.35px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.grid__actionmore {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.value__statements__number_container  {
  width: 352px;
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
}

.footer__background__border__shadow__logo {
  width: 44px;
  height: 44px;
  padding: 1px;
  background: linear-gradient(135deg, var(--color-yellow-52, #D4AF37) 0%, var(--color-yellow-52-90p, rgba(212.01, 174.99, 54.98, 0.90)) 100%);
  box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  border-radius: 16px;
  outline: 1px var(--color-yellow-52-20p, rgba(212.01, 174.99, 54.98, 0.20)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}


.footer__colonnes__list {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
}

.footer__newsletter__input {
  flex: 1 1 0;
  height: 36px;
  position: relative;
  background: var(--color-grey-95-10p, rgba(246.01, 242.96, 237.96, 0.10));
  overflow: hidden;
  border-radius: 10px;
  outline: 1px var(--color-grey-95-20p, rgba(246.01, 242.96, 237.96, 0.20)) solid;
  outline-offset: -1px;
}

.footer__horizontal__link {
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.header__landing__logo {
  width: 41.80px;
  height: 41.80px;
  padding: 1px;
  background: linear-gradient(135deg, var(--color-yellow-52, #D4AF37) 0%, var(--color-yellow-52-90p, rgba(212.01, 174.99, 54.98, 0.90)) 100%);
  box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.10);
  overflow: hidden;
  border-radius: 16px;
  outline: 1px var(--color-yellow-52-20p, rgba(212.01, 174.99, 54.98, 0.20)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.hero__props__single__value {
  height: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: flex;
}
 
.hero__carousel__favbutton {
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  left: 371px;
  top: 17px;
  position: absolute;
  background: var(--color-white--80p, rgba(255, 254.99, 254.98, 0.80));
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.product__stats {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}

.product__stats_01 {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}

.carousel__navbutton-forward,
.carousel__navbutton_backward {
  height: 32px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 1px;
  padding-bottom: 1px;
  background: var(--color-orange-9, #1A1612);
  border-radius: 10px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
}


.gridmarket__container__card__button-grid {
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  background: var(--color-yellow-52, #D4AF37);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.gridmarket__container__card__button-list{
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.gridmarket__container_background_button {
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  left: 435.33px;
  top: 12px;
  position: absolute;
  opacity: 0;
  background: var(--color-white--80p, rgba(255, 254.99, 254.98, 0.80));
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.container_14 {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}
 
.container_21 {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}
 

.container_28 {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}
 

.container_35 {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}
 

.container_42 {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}
 

.container_49 {
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
}

.overlay {
  width: 48px;
  height: 48px;
  left: 78px;
  top: 24px;
  position: absolute;
  background: var(--color-yellow-52-20p, rgba(212.01, 174.99, 54.98, 0.20));
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.overlay_01 {
  width: 48px;
  height: 48px;
  left: 78px;
  top: 24px;
  position: absolute;
  background: var(--color-yellow-52-20p, rgba(212.01, 174.99, 54.98, 0.20));
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.overlay_02 {
  width: 48px;
  height: 48px;
  left: 78px;
  top: 24px;
  position: absolute;
  background: var(--color-yellow-52-20p, rgba(212.01, 174.99, 54.98, 0.20));
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.overlay_03 {
  width: 48px;
  height: 48px;
  left: 78px;
  top: 24px;
  position: absolute;
  background: var(--color-yellow-52-20p, rgba(212.01, 174.99, 54.98, 0.20));
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.button_21 {
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.button_22 {
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.button_23 {
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.button_24 {
  height: 36px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: var(--color-yellow-52, #D4AF37);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.button_25 {
  height: 30.40px;
  padding-left: 9.50px;
  padding-right: 9.50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.button_26 {
  height: 30.40px;
  padding-left: 9.50px;
  padding-right: 9.50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.button_useraccount {
  height: 30.40px;
  padding-left: 9.50px;
  padding-right: 9.50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}

.value__statements__number {
  align-self: stretch;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
}

.footer__margin {
  width: 56px;
  height: 44px;
  padding-right: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.footer__colonnes {
  width: 352px;
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}


.footer__horizontal__list {
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
}

.hero__value__props {
  align-self: stretch;
  padding-top: 8px;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.hero__cta__seller__svg {
  width: 16px;
  height: 16px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;



  flex: 1 1 0;
  position: relative;

}

.link-carousel-link {

  background: transparent;
}

.hero__carousel__image {
  width: 424px;
  padding: 1px;
  position: relative;
  background: var(--color-orange-20, #3A342E);
  box-shadow: 0px 1px 0px rgba(212, 175, 55, 0.10);
  overflow: hidden;
  border-radius: 12px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.product__data {
  align-self: stretch;
  padding-top: 1.50px;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.carousel_nav {
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
}

.gridmarket__container__card__button-filter-svgmargin {
  width: 24px;
  height: 16px;
  padding-right: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}


.gridmarket__container__card__button-filter-svg {
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}



.border {
  padding: 1px;
  border-radius: 12px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

 

.gridmarket__container_background {
  align-self: stretch;
  position: relative;
  background: var(--color-orange-20, #3A342E);
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.contagridmarket__contener__price {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 373.78px;
  display: inline-flex;
}

  
.gridmarket__contener__description_price {
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
}

.value__statements__cards_background__container_txt_3 {
  align-self: stretch;
  height: 248px;
  position: relative;
}

.value__statements__cards_background__container{
  align-self: stretch;
  height: 204px;
  position: relative;
}
 
 

.buttonmargin {
  height: 32px;
  padding-right: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.buttonmargin_01 {
  height: 32px;
  padding-right: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.footer__newsletter__mail {
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
}

.wishlist {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.usercart {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.useraccount {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.footer__part__un {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.hero__call__sell {
  height: 40px;
  padding: 16px;
  background: linear-gradient(170deg, var(--color-yellow-52, #D4AF37) 0%, var(--color-orange-47, #C19B2E) 100%);
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.20) inset;
  overflow: hidden;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 8.01px;
  display: flex;
}

.hero__carousel__description {
  width: 424px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  display: inline-flex;

}

.carousel__header {
  width: 896px;
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: flex-start;
  align-items: center;
  gap: 343.05px;
  display: inline-flex;
}

.gridmarket__container__card__button-filter {
  height: 32px;
  padding-top: 5.50px;
  padding-bottom: 6.50px;
  padding-left: 11px;
  padding-right: 11px;
  background: var(--color-orange-9, #1A1612);
  border-radius: 10px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  display: flex;
}
 

.gridmarket__contener__description {
  align-self: stretch;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
}

.value__statements__cards_background_border_shadow  {
  width: 206px;
  align-self: stretch;
  padding: 1px;
  position: relative;
  background: var(--color-orange-14, #2A241E);
  box-shadow: 0px 4px 20px rgba(212, 175, 55, 0.15);
  overflow: hidden;
  border-radius: 16px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.footer__part__trois {
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}


.usermenu {
  padding-left: 0.90px;
  padding-right: 0.90px;
  padding-top: 0.80px;
  padding-bottom: 0.80px;
  justify-content: flex-start;
  align-items: center;
  gap: 9.80px;
  display: flex;
}

.hero__call__toaction {
  align-self: stretch;
  padding-bottom: 24px;
  justify-content: center;
  align-items: center;
  gap: 16.01px;
  display: inline-flex;
}

.hero__carousel__view {
  width: 880px;
  left: 8px;
  top: 88px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 32px;
  display: inline-flex;
}

.gridmarket__container__card__icons {
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
}

.gridmarket__container_line1-col1,
.gridmarket__container_line1-col2,
.gridmarket__container_line2-col1,
.gridmarket__container_line2-col2 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.gridmarket__container_line1-col3 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0px;
  display: flex;
}

.gridmarket__container_line2-col3 {
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.01px;
  display: flex;
}

.value__statements__cards_txt3 {
  align-self: stretch;
  padding-top: 32px;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
}

.footer__list {
  width: 352px;
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
}

.header__landing__container__logo {
  width: 1504px;
  height: 48px;
  left: 200px;
  top: 13px;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 1321px;
  display: inline-flex;
}

.hero__carousel {
  align-self: stretch;
  height: 620px;
  position: relative;
}

.gridmarket__container__card {
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
}

.background-border-shadow {
  width: 485.33px;
  padding-top: 1px;
  padding-bottom: 25.01px;
  padding-left: 1px;
  padding-right: 1px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: var(--color-orange-14, #2A241E);
  box-shadow: 0px 4px 20px rgba(212, 175, 55, 0.15);
  overflow: hidden;
  border-radius: 16px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}


.background-border-shadow-line1-col1 {
  left: 0px;
  top: 0px;
}


.background-border-shadow-line1-col2 {
  left: 509.33px;
  top: 0px;
}

.background-border-shadow-line1-col3 {
  left: 1018.66px;
  top: 0px;
}

.background-border-shadow-line2-col1 {
  left: 0px;
  top: 653.34px;
}

.background-border-shadow-line2-col2 {
  left: 509.33px;
  top: 653.34px;
}

.background-border-shadow-line2-col3 {
  left: 1018.66px;
  top: 653.34px;
}


.value__statements__cards {
  width: 896px;
  max-width: 896px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
}

.footer__container_landing_list {
  align-self: stretch;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
}

.header__landing {
  width: 1905px;
  height: 74px;
  left: 0px;
  top: -0.16px;
  position: absolute;
  background: var(--color-orange-14, #2A241E);
  box-shadow: 0px 2px 10px rgba(44, 37, 31, 0.08);
  overflow: hidden;
  border-radius: 12px;
  outline: 1px var(--color-yellow-52-30p, rgba(212, 175, 55, 0.30)) solid;
  outline-offset: -1px;
}

.hero__container {
  width: 896px;
  height: 1031px;
  padding-top: 40px;
  left: 505px;
  top: 76.84px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 19px;
  display: inline-flex;
}

.gridmarket__list__cards {
  align-self: stretch;
  height: 1282.69px;
  position: relative;
}

.statements__container {
  width: 100%;
  max-width: 1536px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;
  display: flex;
}

.footer__container_landing {
  width: 100%;
  max-width: 1536px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 64px;
  padding-bottom: 64px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: flex;
}

.hero {
  align-self: stretch;
  height: 1050px;
  position: relative;
  background: var(--color-orange-9, #1A1612);
}

.gridmarket__container {
  width: 100%;
  max-width: 1536px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: flex;
}

.value__statements {
  align-self: stretch;
  padding-left: 184.50px;
  padding-right: 184.50px;
  padding-top: 64px;
  padding-bottom: 64px;
  background: var(--color-orange-20, #3A342E);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.footer__landing {
  width: 1905px;
  padding-left: 184.50px;
  padding-right: 184.50px;
  background: var(--color-orange-44, #8B7355);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.gridmarket {
  align-self: stretch;
  padding-left: 184.50px;
  padding-right: 184.50px;
  padding-top: 64px;
  padding-bottom: 64px;
  background: var(--color-orange-9, #1A1612);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;


}

.main {
  width: 1905px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
}

.no-underline {
  text-decoration: none;
  color: inherit;
}

.slide-image {
  max-width: 422px;
  max-height: 422px;
  width: auto;
  height: auto;
  display: block;
}



.vector__mailbox {
  width: 16px;
  height: 16px;
  left: 0px;
  top: 0px;
  position: absolute;

}

.input-email {
  background: inherit;
  color: white;
  border: none;
}


.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding: 0 1rem;
  gap: 1rem;
}

.controls {
  text-align: center;
  margin-top: 1.5rem;
}



.value__statements__container {
  width: 100%;
  max-width: 1536px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;
  display: flex;
}
</style>