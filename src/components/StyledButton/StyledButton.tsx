import React, { forwardRef, ElementType } from "react";
import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    component?: ElementType;
    href?: string;
    download?: string;
    onClick?: () => void;
    // Outras propriedades comuns podem ser adicionadas aqui
}

const StyledBtn = styled('button')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Adiciona uma sombra sutil
    transition: "background-color 0.3s ease",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main
    }
}));


const StyledAnchor = styled('a')({
    // Estilos para âncoras aqui
});

const StyledButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, StyledButtonProps>(
    ({ children, component = 'button', ...props }, ref) => {
        const Component = component as ElementType;
        
        if (component === "button") {
            // Lidar com as propriedades de botão
            const { onClick, ...buttonProps } = props;
            return <StyledBtn as={Component} ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick} {...buttonProps}>{children}</StyledBtn>;
        } else {
            // Lidar com as propriedades de âncora
            const { href, download, ...anchorProps } = props;
            return <StyledAnchor as={Component} ref={ref as React.Ref<HTMLAnchorElement>} href={href} download={download} {...anchorProps}>{children}</StyledAnchor>;
        }
    }
);

export default StyledButton;