<template>
    <div class="contains d-flex flex-column m-auto rounded-3">
        <div class='section1' style="margin: 30px 0 0 0;" >
            <div class="container  d-flex justify-content-between flex-grow-2">
                <div class="app_hub">
                    <h1>Apps Hub</h1>
                </div>
                <div class="arrow_previous">
                    <router-link to="/dashboard" style="cursor: pointer; ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16" color="white">
                            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                        </svg>
                    </router-link>
                </div>
                <div class="dropdown menu-icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" viewBox="0 0 45 30" fill="none" data-bs-toggle="dropdown">
                        <line x1="0.920475" y1="4.5009" x2="44.9205" y2="3.5009" stroke="url(#paint0_linear_1_1579)" stroke-width="7"/>
                        <line x1="0.920475" y1="15.5009" x2="44.9205" y2="14.5009" stroke="url(#paint1_linear_1_1579)" stroke-width="7"/>
                        <line x1="0.920475" y1="26.5009" x2="44.9205" y2="25.5009" stroke="url(#paint2_linear_1_1579)" stroke-width="7"/>
                        <defs>
                          <linearGradient id="paint0_linear_1_1579" x1="46.6095" y1="7.4637" x2="40.7014" y2="23.6079" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#371696"/>
                            <stop offset="1" stop-color="#A01212" stop-opacity="0.64"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_1_1579" x1="46.6095" y1="18.4637" x2="40.7014" y2="34.6079" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#371696"/>
                            <stop offset="1" stop-color="#A01212" stop-opacity="0.64"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_1_1579" x1="46.6095" y1="29.4637" x2="40.7014" y2="45.6079" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#371696"/>
                            <stop offset="1" stop-color="#A01212" stop-opacity="0.64"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link class="dropdown-item" to="/homeview">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap-fill " viewBox="0 0 16 16">
                                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                                </svg>&nbsp; Apps Hub
                            </router-link>
                        </li>
                        <li>
                            <router-link class="dropdown-item" to="/setting">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                </svg>&nbsp; Settings
                            </router-link>
                        </li>
                        <li >
                            <a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question" viewBox="0 0 16 16">
                                <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z"/>
                                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>
                              </svg>&nbsp; Help Center</a>
                        </li>
                        <li class="border" style="border-bottom: none!important;">
                            <a
                                class="dropdown-item"
                                to="#"
                                @click="handleLogout" 
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill="none">
                                    <path d="M12.6125 19.4875L14.375 21.25L20.625 15L14.375 8.75L12.6125 10.5125L15.8375 13.75H3.75V16.25H15.8375L12.6125 19.4875ZM23.75 3.75H6.25C4.8625 3.75 3.75 4.875 3.75 6.25V11.25H6.25V6.25H23.75V23.75H6.25V18.75H3.75V23.75C3.75 25.125 4.8625 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75Z" fill="#5A5D6C"/>
                                    </svg> &nbsp;Logout
                            </a>
                        </li>
                    </ul>
                  </div>
            </div>
        </div>
        <div class='section2 ' style="margin: 30px 230px 0 0;">
            <div class="container d-flex justify-content-end flex-grow-3">
                <div class="input-group d-md-flex " style="width: 18%;">
                    <span class="inputgroup " id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_1_1942" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_1_1942)">
                        <path d="M6.5 11L12 2L17.5 11H6.5ZM17.5 22C16.25 22 15.1875 21.5625 14.3125 20.6875C13.4375 19.8125 13 18.75 13 17.5C13 16.25 13.4375 15.1875 14.3125 14.3125C15.1875 13.4375 16.25 13 17.5 13C18.75 13 19.8125 13.4375 20.6875 14.3125C21.5625 15.1875 22 16.25 22 17.5C22 18.75 21.5625 19.8125 20.6875 20.6875C19.8125 21.5625 18.75 22 17.5 22ZM3 21.5V13.5H11V21.5H3ZM17.5 20C18.2 20 18.7917 19.7583 19.275 19.275C19.7583 18.7917 20 18.2 20 17.5C20 16.8 19.7583 16.2083 19.275 15.725C18.7917 15.2417 18.2 15 17.5 15C16.8 15 16.2083 15.2417 15.725 15.725C15.2417 16.2083 15 16.8 15 17.5C15 18.2 15.2417 18.7917 15.725 19.275C16.2083 19.7583 16.8 20 17.5 20ZM5 19.5H9V15.5H5V19.5ZM10.05 9H13.95L12 5.85L10.05 9Z" fill="#1C1B1F"/>
                        </g>
                        </svg></span>
                    <input type="text" class="form-control handleinput" placeholder="Category" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="input-group d-md-flex" style="width: 18%;">
                    <span class="inputgroup" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg></span>
                    <input type="text" class="form-control handleinput" placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping">
                </div>
            </div>
        </div>
        <div class='section3' >
           <div class="container  d-flex flex-column justify-content-around flex-grow-5 mt-3">
                <p style="font-size: 22px; margin-left:100px">Photos & Videos</p>
                <Carousel :perPage="1" >
                    <Slide class="d-flex justify-content-around flex-wrap" v-for="index in Math.ceil(photos_data.length/10)" :key="index">
                        <div v-for="(item, index1) in photos_data.filter((data, i) => { return i >= (index - 1) * 10 && i < index * 10 })" :key="item.index" style="width: 20%; text-align:center;" class="pt-3">
                            <router-link :to="'/detail/' + index1"><img src="../../assets/icon1.png" class="rounded-4" style="cursor: pointer;"></router-link>
                            <p style="color:#fff">{{ item.name }}</p>
                        </div>
                    </Slide> 
                </Carousel>
           </div>
        </div>
        <div class='section4 ' >
            <div class="container  d-flex flex-column justify-content-around flex-grow-5 mt-3">
                 <p style="font-size: 22px; margin-left:100px">Home Authomation</p>
                 <Carousel perPage="1" >
                     <Slide class="d-flex justify-content-around flex-wrap" v-for="index in Math.ceil(home_data.length/10)" :key="index">
                         <div v-for="(item, index1) in home_data.filter((data, i) => { return i >= (index - 1) * 10 && i < index * 10 })" :key="item.index" style="width: 20%; text-align:center" class="pt-3">
                            <router-link :to="'/detail/' + index1"><img src="../../assets/icon1.png" class="rounded-4" style="cursor: pointer;"></router-link>
                             <p style="color:#fff">{{ item.name }}</p>
                         </div>
                     </Slide> 
                 </Carousel>
            </div>
         </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        components : {
            Carousel,
            Slide,
        },
        data () {
            return {
                home_data:
                [
                    { url:'../../assets/icon1.png', name: 'icon1'},
                    { url:'../../assets/icon1.png', name: 'icon2'},
                    { url:'../../assets/icon1.png', name: 'icon3'},
                    { url:'../../assets/icon1.png', name: 'icon4'},
                    { url:'../../assets/icon1.png', name: 'icon5'},
                    { url:'../../assets/icon1.png', name: 'icon6'},
                    { url:'../../assets/icon1.png', name: 'icon7'},
                    { url:'../../assets/icon1.png', name: 'icon8'},
                    { url:'../../assets/icon1.png', name: 'icon9'},
                    { url:'../../assets/icon1.png', name: 'icon10'},
                ],
                photos_data:
                [
                    { url:'../../assets/icon1.png', image_url:'../../assets/icon1.png', name: 'icon1', description:'Use Plex to organize, beautify, and stream your personal collection of movies, TV shows, music, and photos anywhere, on all your devices'},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon2', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon3', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon4', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon5', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon6', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon7', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon8', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon9', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon10', description:''},
                ]
            }
        },
        methods: {
            handleLogout() {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                this.$router.push("/");
            },
        }
    }
</script>

<style scoped>

</style>