<template>
    <div class="contain d-flex flex-column m-auto rounded-3">
        <div class='section1 '>
            <div class="container d-flex justify-content-between flex-grow-2 mt-2">
                <div class="logo d-flex justify-content-center align-items-center" style="margin:0 0 0 -75px">
                    <p class="logo_p">Logo</p>
                </div>
                <button v-if="status !== 'deleting'" class="rubish_bin" style="border: none;background:none;" @click="handleDelete"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" color="black" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                    </svg>
                </button>
                <button v-else class="rubish_bin" style="border: none;background:none;" @click="handleCancel">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                      </svg>
                </button>
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
                        <li v-if="loggedInUserRole === 'admin'">
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
        <div>
            <div class="container"  >
                <p class="login_name" style="margin:  -30px 0 0 140px;">{{this.loggedInUserName}}</p>
            </div>
        </div>
        <div class='section2 '>
            <div class="container d-flex justify-content-around flex-grow-3 pt-3 mt-2">
                
                <div class="sec-box-1 d-flex justify-content-evenly">
                    <div class="rounded-4" style="margin: 0 0 0 15px;">
                       <img src="../../assets/disk-storage.png" alt="">
                    </div>
                    <div style="margin-left: -10px!important;">
                        <p class='disk-storage d-flex justify-content-start' style="margin: 30px 0 0 0;">Used: 100GB</p>
                        <p class='disk-storage d-flex justify-content-end'>Total: 1TB</p>
                    </div>
                </div>
                <div class="sec-box-2 justify-content-around" style="background-color: #737373;">
                    <div>
                        <vue-circle
                            ref="myprogress"
                            :progress="parseInt(pro_cpu_value)"
                            :size="100"
                            :reverse="false"
                            line-cap="round"
                            :fill="fill"
                            empty-fill="rgba(0, 0, 0, .1)"
                            :animation-start-value="0.0"
                            :start-angle="2.2"
                            insert-mode="append"
                            :animation="{ duration: 1200, easing: 'easeOutBounce' }"
                            :thickness="15"
                            :show-percent="true"
                            @vue-circle-progress="progress"
                            @vue-circle-end="progress_end"
                            >
                            <p style="font-size:16px;margin:10px 0 3.5px 0; ">CPU</p>
                        </vue-circle>
                    </div>
                    <div>
                        <vue-circle
                            ref="myprogress"
                            :progress="parseInt(pro_ram_value)"
                            :size="100"
                            :reverse="false"
                            line-cap="round"
                            :fill="fill"
                            empty-fill="rgba(0, 0, 0, .1)"
                            :animation-start-value="0.0"
                            :start-angle="2.2"
                            insert-mode="append"
                            :animation="{ duration: 1200, easing: 'easeOutBounce' }"
                            :thickness="15"
                            :show-percent="true"
                            @vue-circle-progress="progress"
                            @vue-circle-end="progress_end"
                            
                            >
                            <p style="font-size:16px;margin:10px 0 3.5px 0; ">RAM</p>
                        </vue-circle>
                    </div>
                </div>
            </div>
        </div>
        <div class='section3' >
            <div class="container d-flex flex-column justify-content-around mt-4 pt-3 flex-grow-5"  >
                <Carousel :perPage="1" >
                    <Slide class="d-flex flex-wrap" v-for="index in Math.ceil(app_data.length/15)" :key="index">
                        <div v-for="item in app_data.filter((data, i) => { return i >= (index - 1) * 15 && i < index * 15 })" :key="item.index" style="width: 20%; text-align:center" class="pt-3">
                            <button style="border: none;background:none;" class="btn  position-relative" >
                                <img src="../../assets/icon1.png" class="rounded-4">
                                <button v-if="status === 'deleting'" class="position-absolute top-30 start-80 translate-middle p-2 rounded-circle" style="background-color: #ff9933;border:none" data-bs-toggle="modal" data-bs-target="#deleteModal">                      
                                    <span class="position-absolute" style="font-size: 48px;left: 0px;top: -32px;">-</span>       
                                </button>
                            </button>
                            <p style="color:#fff">{{ item.name }}</p>
                        </div>
                    </Slide> 
                </Carousel>
            </div>
        </div>
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
              <div class="modal-content">
                <div class="modal-body " style="padding: 30px 30px 0;">
                  Are you really sure?
                </div>
                <div class="modal-footer" style="border-top: none;">
                  <button type="button" class="btn btn-primary btn-sm" @click="SaveData" data-bs-dismiss="modal" >Yes</button>
                  <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">No</button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueCircle from '../progress/progress-data.vue';
    import { Carousel, Slide } from 'vue-carousel'
    import Vue from "vue";
    
    export default {
        components : {
            Carousel,
            Slide,
            VueCircle,
        },
        data () {
            return {
                pro_ram_value : '51',
                pro_cpu_value : '6',
                app_data: 
                [
                    { url:'../../assets/icon1.png', name: 'icon1'},
                    { url:'../../assets/icon2.png', name: 'icon2'},
                    { url:'../../assets/icon3.png', name: 'icon3'},
                    { url:'../../assets/icon4.png', name: 'icon4'},
                    { url:'../../assets/icon5.png', name: 'icon5'},
                    { url:'../../assets/icon1.png', name: 'icon1'},
                    { url:'../../assets/icon2.png', name: 'icon2'},
                    { url:'../../assets/icon3.png', name: 'icon3'},
                    { url:'../../assets/icon4.png', name: 'icon4'},
                    { url:'../../assets/icon5.png', name: 'icon5'},
                    { url:'../../assets/icon1.png', name: 'icon1'},
                    { url:'../../assets/icon2.png', name: 'icon2'},
                    { url:'../../assets/icon3.png', name: 'icon3'},
                    { url:'../../assets/icon4.png', name: 'icon4'},
                    { url:'../../assets/icon5.png', name: 'icon5'},
                    { url:'../../assets/icon1.png', name: 'icon1'},
                    { url:'../../assets/icon2.png', name: 'icon2'},
                    { url:'../../assets/icon3.png', name: 'icon3'},
                    { url:'../../assets/icon4.png', name: 'icon4'},
                    { url:'../../assets/icon5.png', name: 'icon5'},
                    { url:'../../assets/icon1.png', name: 'icon1'},
                    { url:'../../assets/icon2.png', name: 'icon2'},
                    { url:'../../assets/icon3.png', name: 'icon3'},
                    { url:'../../assets/icon4.png', name: 'icon4'},
                    { url:'../../assets/icon5.png', name: 'icon5'},
                    { url:'../../assets/icon1.png', name: 'icon1'},
                    { url:'../../assets/icon2.png', name: 'icon2'},
                    { url:'../../assets/icon3.png', name: 'icon3'},
                    { url:'../../assets/icon4.png', name: 'icon4'},
                    { url:'../../assets/icon5.png', name: 'icon5'},
                    { url:'../../assets/icon3.png', name: 'icon3'},
                    { url:'../../assets/icon4.png', name: 'icon4'},
                    { url:'../../assets/icon5.png', name: 'icon5'},
                    
                ],
                fill : { gradient: ["#47e295","#47e295", "#9bdb84", "#9bdb84", "red"] },
                status:'none',
                loggedInUserName: null,
                loggedInUserRole: null
            }
        },
        methods : {
            MenuFunction() {
                document.getElementById("myDropdown").classList.toggle("show");
            },
            handleDelete () {
                this.status = 'deleting'
            },
            handleCancel () {
                this.status = 'none'
            },
            SaveData () {
                console.log('Saved your content');
                Vue.$toast.open({
                    message: "Successful",
                    type: "success",
                    position: "top-right",
                });
            },
            progress(event,progress,stepValue){
                if (stepValue > 80) {
                this.$refs.myprogress.updateFill('#e3f218');
                }
            },
            progress_end(){
                console.log("Circle progress end");
            },
            handleLogout() {
                console.log('ddd')
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                this.$router.push("/");
            },
            _getUser() {
                this.loggedInUserName = JSON.parse(localStorage.getItem("user"))?.name;
                this.loggedInUserRole = JSON.parse(localStorage.getItem("user"))?.role
            }
        },
        async created() {
            this._getUser();
        },
        async updated() {
            this._getUser();
        },
        
    }
</script>

<style >
@import 'https://fonts.googleapis.com/css?family=Ruda';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
</style>