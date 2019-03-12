
const App = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar
      title='lucy'
      menuItems={[
        {
          text: 'Provas',
          target: '',
          icon: faChalkboardTeacher,
          active: true
        },
        {
          text: 'Empresa',
          target: '/info',
          icon: faHotel
        },
        {
          text: 'Candidatos',
          target: '',
          icon: faFileSignature
        },
        {
          text: 'Estatísticas',
          target: '',
          icon: faChartBar
        },
        {
          text: 'Planos',
          target: '',
          icon: faFileInvoiceDollar
        }
      ]}
    >
      0
    </Navbar>
    <Title>MINHAS PROVAS</Title>
    <CardList />
  </Fragment>
)

export default App
