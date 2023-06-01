import React from 'react'

export const Footer = () => {
  return (
  <div class="container-fluid footered">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
      <div class="col-md-4 d-flex align-items-center">
        
        <span class="mb-3 mb-md-0 text-warning">© CodeSage</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-warning" href="#"><i class="bi bi-twitter"></i></a></li>
        <li class="ms-3"><a class="text-warning" href="#"><i class="bi bi-instagram"></i></a></li>
        <li class="ms-3"><a class="text-warning" href="#"><i class="bi bi-facebook"></i></a></li>
        <li class="ms-3"><a class="text-warning" href="#"><i class="bi bi-whatsapp"></i></a></li>            
      </ul>
    </footer>
  </div>
  )
}
