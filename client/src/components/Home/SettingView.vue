<template>
    <div class="contain-setting d-flex flex-column m-auto rounded-3">
        <div class="section1">
            <div class="container d-flex justify-content-between align-items-center mt-3">
                <h1 class="pt-4" style="margin-left: 85px;">Settings</h1>
                <div class="arrow_previous_setting">
                    <router-link to="/dashboard" style="cursor: pointer; ">
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
        <div class="section2" >
            <div class="container d-lg-flex justify-content-lg-evenly align-items-lg-center mt-3">

                <div class="d-md-flex   border border-black setting_black align-items-md-start flex-md-column">
                    <p class='check_p'>Enable 2FA</p>
                    <p class='check_p'>Restart</p>
                    <p class='check_p'>Shutdown</p>
                    <p class='check_p'>Application Version &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v0.1</p>
                    <button class="check_button"><span class="button_p">Check for App Updates</span></button>
                </div>
                <div  class="d-md-flex  border border-black setting_black  align-items-md-start flex-md-column" style="overflow-y: scroll;" >
                    <div class="d-flex justify-content-start align-items-center" style="margin: 10px 0 0 20px; ">
                        <p class="setting_p">Manage Users</p>
                        <button style="border: none; background:none" :data-bs-toggle="handlemodal_insert===true ? 'modal' :''" data-bs-target="#insertModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                </svg>
                        </button>
                        <button style="border: none; background:none" :data-bs-toggle="handlemodal_edit===true ? 'modal' : null" data-bs-target="#editModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                        </button>
                    </div>
                    <div v-for="(item, index) in userData[0]" :key="index" 
                            class="d-flex justify-content-start align-items-center activestatus" 
                            >
                        <div
                        @click="editModalFunction(item)"
                        style="fill: var(--blue, linear-gradient(266deg, #371696 0%, rgba(160, 18, 18, 0.64) 100%));" >
                            <svg v-if="item.avatar == null" class="avatar" xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                                <circle cx="41" cy="41" r="41" fill="url(#paint0_linear_1_1524)"/>
                                <defs>
                                <linearGradient id="paint0_linear_1_1524" x1="84.9784" y1="41.0127" x2="-2.50143" y2="46.084" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#371696"/>
                                <stop offset="1" stop-color="#A01212" stop-opacity="0.64"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <img v-else :src="'http://localhost:5000/images'+item.avatar" alt="" srcset="" class="rounded-4" style="cursor:pointer;width: 82px;height:82px;">
                        </div>
                        <div class="d-flex flex-column" style="color: #524F4F;
                        font-family: Montserrat;
                        font-size: 25px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;margin:10px 0 0 25px">
                            <p style='margin:0'>{{ item.name }}</p>
                            <p style=' font-size: 25px;'>{{ item.role }}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="insertModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form  id="upload">
                        <div class="upload">
                            <div
                                class="dropzone"
                                @dragover.prevent
                                @dragenter.prevent
                                @dragstart.prevent
                                @drop.prevent="handleFileChange($event.dataTransfer)"
                            >
                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    @change="handleFileChange"
                                    required
                                    />
                                    <img v-bind:src="preview" />
                            </div>
    
                                <h3 v-if="success">File Uploaded Successfully. publicId: {{success}}</h3>
                        </div>
                        <div class="position-relative my-3 inputGroup text-center">
                            <span class="position-absolute mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-video" viewBox="0 0 16 16">
                                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
                              </svg>
                            </span>
                            <input
                              type="text"
                              class="border-0 border-bottom w-100" 
                              id="name"
                              placeholder="Enter Name"
                              v-model="userData.name"
                            />
                        </div>
                        <div class="position-relative my-3 inputGroup text-center">
                            <span class="position-absolute mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg></span>
                            <input 
                              type="email" 
                              class="border-0 border-bottom w-100" 
                              placeholder="Enter ID" 
                              v-model.trim="userData.email"
                              id="email"
                            />
                        </div>
                        <div class="position-relative my-3 inputGroup text-center">
                            <span class="position-absolute mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
                              <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                              <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                            </svg></span>
                            <input 
                              type="password" 
                              class="border-0 border-bottom w-100" 
                              placeholder="Password" 
                              id="password"
                              v-model.trim="userData.password"
                            />
                        </div>
                        <div class="form-check d-flex justify-content-evenly align-items-center">
                            <div>
                                <input type="radio" v-model="userData.role" name="role" value="admin">
                                <label>Admin</label>
                            </div>
                            <div>
                                <input type="radio" v-model="userData.role" name="role" value="client">
                                <label>Client</label>
                            </div>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <button class="btn btn-primary" type="submit" @click="submitForm">Save</button>
                        <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form  id="upload">
                        <div class="upload">
                            <div
                                class="dropzone"
                                @dragover.prevent
                                @dragenter.prevent
                                @dragstart.prevent
                                @drop.prevent="handleFileChange($event.dataTransfer)"
                            >
                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    @change="handleFileChange"
                                    required
                                    />
                                    <img v-bind:src="preview" />
                            </div>
    
                                <h3 v-if="success">File Uploaded Successfully. publicId: {{success}}</h3>
                        </div>
                        <div class="position-relative my-3 inputGroup text-center">
                            <span class="position-absolute mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-video" viewBox="0 0 16 16">
                                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
                              </svg>
                            </span>
                            <input
                              type="text"
                              class="border-0 border-bottom w-100" 
                              id="name"
                              placeholder="Enter Name"
                              v-model="userData.name"
                            />
                        </div>
                        <div class="position-relative my-3 inputGroup text-center">
                            <span class="position-absolute mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg></span>
                            <input 
                              type="email" 
                              class="border-0 border-bottom w-100" 
                              placeholder="Enter ID" 
                              :value="userData.email"
                              id="email"
                              disabled
                            />
                        </div>
                        <div class="position-relative my-3 inputGroup text-center">
                            <span class="position-absolute mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
                              <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                              <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                            </svg></span>
                            <input 
                              type="password" 
                              class="border-0 border-bottom w-100" 
                              placeholder="Password" 
                              id="password"
                              v-model.trim="userData.password"
                            />
                        </div>
                        <div class="form-check d-flex justify-content-evenly align-items-center">
                            <div>
                                <input type="radio" v-model="userData.role" name="role" value="admin">
                                <label>Admin</label>
                            </div>
                            <div>
                                <input type="radio" v-model="userData.role" name="role" value="client">
                                <label>Client</label>
                            </div>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <button class="btn btn-primary" type="submit" @click="submitForm">Save</button>
                        <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { apiurl } from '../config/key.js'
    export default {
        data() {
            return {
                userData: [],
                handlemodal_edit:false,
                handlemodal_insert:true,
                preview: null,
                file:null,
                success:'',
            }
        },
        methods : {
            _getAllData: async function () {
                try {
                    const response = await axios.get(`${apiurl}/`);
                    if (response.data.message === 'success') {
                        this.userData = [...this.userData, response.data.data]
                        // Vue.$toast.open({
                        //     message: "import All Data successful",
                        //     type: "success",
                        //     position: "top-right",
                        // })
                    }
                } catch (error) {
                    Vue.$toast.open({
                    message:
                        error.response?.data?.error ||
                        error.response?.data?.message ||
                        error?.message,
                    type: "error",
                    position: "top-right",
                    });
                }
            },
            editModalFunction: async function (value) {
                this.userData.avatar = value.avatar;
                this.userData.name = value.name;
                this.userData.email = value.email;
                this.userData.role = value.role;
                this.preview = 'http://localhost:5000/images'+this.userData.avatar
                this.handlemodal_edit = true
                
            },
            handleFileChange (e) {
                this.file = e.target.files[0];
                
                let reader = new FileReader();
                reader.readAsDataURL(this.file);

                reader.onload = (e) => {
                    this.preview = e.target.result;
                };
            },
            submitForm () {
                const formData = new FormData()
                formData.append("file", this.file)
                formData.append("name", this.userData.name )
                formData.append("email", this.userData.email )
                formData.append("password", this.userData.password )
                formData.append("role", this.userData.role )

                const config = {
                    headers: {
                    'content-type': 'multipart/form-data'
                    }
                }
                axios.post(`${apiurl}/uploads`, formData, config)
                    .then(res => {
                        console.log(res);
                        Vue.$toast.open({
                            message: "Register Successful",
                            type: "success",
                            position: "top-right",
                        })
                        this.initFunction();
                        this._getAllData();
                        
                    })
                    .catch(err => console.log(err)) 
                
                
            },
            initFunction () {
                this.userData = []
                this.preview = null
            },
            handleLogout() {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                this.$router.push("/");
            },
        },
        async created() {
            this._getAllData()
        },
    }
</script>

<style scoped>
.upload .dropzone {
    height: fit-content;
    min-height: 200px;
    max-height: 400px;
    width: 300px;
    background: #fdfdfd;
    border-radius: 5px;
    border: 2px dashed #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
.upload input[type="file"] {
    position: absolute;
    opacity: 0;
    width: inherit;
    min-height: 200px;
    max-height: 400px;
    cursor: pointer;
  }
  
.upload img {
    width: 100%;
    height: 100%;
  }
.upload button {
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 1em;
    color: #e74c3c;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    margin: 20px;
    padding: 1.2em 2.4em;
    text-align: center;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }
</style>