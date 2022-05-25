const footerYear = new Date().getFullYear()
function Footer() {
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      
    <p>Copyright &copy; {footerYear} All rights reserved</p>

</footer>
  )
}

export default Footer
