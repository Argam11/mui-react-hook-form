import { Link } from "react-router-dom";
import { Button, Stack, Box } from "@mui/material";
import styled from "@mui/system/styled";

const NavbarStyled = styled(Stack)({
  width: 120,
  height: "100vh",
  borderRight: "1px solid #aaa",
});

const MenuList = [
  { id: 1, name: "TextField", path: "/text-field" },
  { id: 2, name: "Chackbox", path: "/chackbox" },
];

const VerticalNavber = ({ children }: any) => {
  return (
    <Stack direction="row">
      <NavbarStyled>
        {MenuList.map((item) => {
          return (
            <Box
              component={Link}
              to={item.path}
              sx={{
                py: 2,
                backgroundColor: "#ccc",
                cursor: "pointer",
                textAlign: "center",
                borderBottom: "1px solid #aaa",
                m: 1,
                borderRadius: 2,
                color: "#000",
                textDecoration: "unset",
              }}
            >
              {item.name}
            </Box>
          );
        })}
      </NavbarStyled>

      <Box sx={{ p: 2 }}>{children}</Box>
    </Stack>
  );
};

export default VerticalNavber;
