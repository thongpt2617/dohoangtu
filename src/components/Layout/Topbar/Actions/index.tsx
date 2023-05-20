import { FC, useCallback } from "react";
import { Flex, Button, IconButton, Tooltip, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ROUTE, PUBLIC_ROUTES } from "@/constants/route";
import { AuthMode } from "@/constants/auth";
import { BsBoxArrowInRight } from "react-icons/bs";
import UserMenu from "@/components/Layout/Topbar/Actions/UserMenu";
import useMobile from "@/hooks/useMobile";
import {
  useCurrentUserSelector,
  useUserRoleSelector,
} from "@/store/slices/user";
import { MdHome } from "react-icons/md";
import { UserRole } from "@/types/permission";
import RoleTag from "@/components/Role/RoleTag";
import { COLORS } from "@/constants/theme";

type ActionsProps = {};
const Actions: FC<ActionsProps> = () => {
  const { isMobile } = useMobile();
  const router = useRouter();
  const currentUser = useCurrentUserSelector();
  const userRole = useUserRoleSelector();
  const authenticated = !!currentUser;
  const { pathname } = router;

  const handleSignIn = () => {
    router.push({
      pathname: ROUTE.auth,
      query: {
        mode: AuthMode.signIn,
      },
    });
  };

  const handleSignUp = () => {
    router.push({
      pathname: ROUTE.auth,
      query: {
        mode: AuthMode.signUp,
      },
    });
  };

  const handleEnterApp = useCallback(() => {
    if (userRole === UserRole.student) {
      return router.push(ROUTE.studentHome);
    }
    if (userRole === UserRole.teacher) {
      return router.push(ROUTE.teacherHome);
    }
  }, [userRole, router]);

  const handleGoToHome = () => {
    router.push(ROUTE.home);
  };

  const isAuthenticatedAndOnPublicPages =
    authenticated && PUBLIC_ROUTES.includes(pathname);
  const isUnauthenticatedAndNotOnAuthPage =
    !authenticated && pathname !== ROUTE.auth;

  if (isUnauthenticatedAndNotOnAuthPage) {
    return (
      <Flex gap="0.5rem" p="0.125rem" borderRadius="md">
        <Button
          variant="ghost"
          color={COLORS.whiteSatin}
          onClick={handleSignUp}
          fontSize="0.875rem"
          h="fit-content"
          py="0.5rem"
        >
          Đăng kí
        </Button>
        <Button
          onClick={handleSignIn}
          fontSize="0.875rem"
          h="fit-content"
          py="0.5rem"
          variant="outline"
          color={COLORS.whiteSatin}
          borderColor={COLORS.whiteSatin}
        >
          Đăng nhập
        </Button>
      </Flex>
    );
  }

  if (isAuthenticatedAndOnPublicPages) {
    return (
      <Tooltip
        hasArrow
        borderRadius="md"
        placement="left"
        label={
          <Box>
            <Text>Vào ứng dụng</Text>
          </Box>
        }
      >
        <Button
          color={COLORS.whiteSatin}
          onClick={handleEnterApp}
          aria-label="enter-app"
          variant="ghost"
          px="0"
          leftIcon={<BsBoxArrowInRight size="1.5rem" />}
        >
          {!!userRole && <RoleTag role={userRole} fontSize="1rem" />}
        </Button>
      </Tooltip>
    );
  }

  if (authenticated) return <UserMenu />;

  if (isMobile)
    return (
      <Tooltip
        hasArrow
        borderRadius="md"
        placement="left"
        label={
          <Box>
            <Text>Trang chủ</Text>
          </Box>
        }
      >
        <IconButton
          onClick={handleGoToHome}
          aria-label="Home"
          variant="ghost"
          icon={<MdHome size="1.75rem" />}
        />
      </Tooltip>
    );

  return null;
};

export default Actions;
