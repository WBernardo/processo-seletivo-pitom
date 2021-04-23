export const goToHomePage = (history) => {
    history.push("/")
  }
  
export const goToLoginPage = (history) => {
    history.push("/users/login")
  }

export const goToSignUpPage = (history) => {
    history.push("/users/signup")
  }

export const goToCategoriesPage = (history) => {
    history.push("/ngo/categories")
  }

export const goToNgoRegistrationPage = (history) => {
    history.push("/ngo/registration")
  }

export const goToAdminPage = (history) => {
    history.push("/users/admin")
  }

export const goToEditNgoPage = (history) => {
    history.push("/ngo/edit")
}
