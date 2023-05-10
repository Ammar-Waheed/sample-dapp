import Box from "@mui/material/Box"

interface Props {
    children: React.ReactNode
    variant: string
}

const Container: React.FC<Props> = (props): JSX.Element => {
    return props.variant === "simple" ? (
        <Box
            bgcolor={"#222528"}
            display={"flex"}
            flexWrap={"wrap"}
            rowGap={"30px"}
            columnGap={"40px"}
            minHeight={"45%"}
            width={"55%"}
            border={"2px solid black"}
            padding={"6vh 3vw"}
            borderRadius={"20px"}
            mb={"10%"}
        >
            {props.children}
        </Box>
    ) : (
        <Box bgcolor={"#1b202c"} height={"80vh"} width={"70vw"} borderRadius={"30px"} overflow={"auto"}>{props.children}</Box>
    )
}

export default Container
