import { ReactNode } from "react"
import { Container as ContainerStyles } from "./styles"

interface Props {
  children: ReactNode
}

const Container = ({children} : Props) => {
  return (
    <ContainerStyles>
      {children}
    </ContainerStyles>
  )
}

export default Container
