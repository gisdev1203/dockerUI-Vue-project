<template>
    <div class="containes d-flex flex-column m-auto rounded-3">
        <div class="section1">
            <div class="d-flex justify-content-end mt-3">
                <div class="arrow_previous">
                    <router-link to="/homeview" style="cursor: pointer; ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16" color="black">
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
        <div class="section2">
            <div class="container d-flex flex-column mt-5" >
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <img src="../../assets/icon1.png" alt="" srcset="">&nbsp;&nbsp;&nbsp;
                        <p style="font-size: 36px;margin:0; font-weight:bold;" class="d-flex justify-content-center align-items-start">{{ foundData.name }}</p></div>
                    <div class=" d-flex flex-column justify-content-center align-items-center">
                        <button type="button" :class="status !== 'none' ? 'disabled' : ''" class="btn btn-outline-light rounded-3" style="width: 100px; height:35px; cursor:pointer;color:gray; border-color:#b3adbd" @click="installFunction">
                            <span v-show="status === 'installing'" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            Install
                        </button>
                        <span class="mt-2" :style="status === 'installing' ? '' : 'visibility:hidden'">Installing...</span>
                    </div>
                </div>
                <div class="d-flex justify-content-end align-items-center mt-4">
                    <img src="../../assets/image_url.png" alt="" srcset="" style="width: 95%;">
                </div>
                <div class="d-flex flex-column justify-content-center align-items-start mt-5" style="margin-left: 60px;">
                    <p style="font-size: 30px; font-weight:bold">Description</p>
                    <p style="font-size: 20px; color: #000;
                    font-family: Montserrat;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 181.4%; /* 43.536px */
                    letter-spacing: 1.2px;width: 800px;">{{ foundData.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        data () {
            return {
                detail_data:
                [
                    { url:'../../assets/icon1.png', image_url:'../../assets/image_url.png', name: 'Plex', description:'Use Plex to organize, beautify, and stream your personal collection of movies, TV shows, music, and photos anywhere, on all your devices'},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon2', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon3', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon4', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon5', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon6', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon7', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon8', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon9', description:''},
                    { url:'../../assets/icon1.png', image_url:'', name: 'icon10', description:''},
                ],
                userId : null,
                status: 'none'
            }
        },
        methods : {
            installFunction () {
                console.log('Installing...');
                this.status = 'installing'
            },
            handleLogout() {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                this.$router.push("/");
            },
        },
        computed : {
            foundData () {
                return this.detail_data.filter((p, index) => index == this.userId)[0] 
            }
        },
        mounted () {
            this.userId = this.$route.params.id;
        }
    }
</script>

<style scoped>

</style>