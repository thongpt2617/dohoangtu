import {
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Flex,
} from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import RoleTag from "@/components/Role/RoleTag";
import { MdPerson, MdLogout } from "react-icons/md";
import { useUserRoleSelector } from "@/store/slices/user";
import { COLORS } from "@/constants/theme";

const UserMenu = () => {
  const auth = getAuth();
  const userRole = useUserRoleSelector();
  const user = auth.currentUser;
  const userCred = !!user
    ? user.displayName ?? user.email?.split("@")[0]
    : "N/A";

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button variant="unstyled" px="0">
          <Avatar
            name={userCred}
            size="sm"
            bgColor={COLORS.white}
            color={COLORS.starryNightBlue}
            fontWeight="700"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent w="fit-content" bgColor="white">
        <PopoverArrow />
        <PopoverBody>
          <Flex flexDir="column" gap="1rem">
            {!!userRole && <RoleTag role={userRole} mt="0.5rem" py="0.5rem" />}
            <Button
              w="100%"
              variant="ghost"
              leftIcon={<MdPerson size="1.25rem" />}
              fontSize="0.875rem"
              justifyContent="flex-start"
              px="1rem"
            >
              Thông tin
            </Button>
            <Button
              variant="ghost"
              px="1rem"
              w="100%"
              leftIcon={<MdLogout size="1.25rem" />}
              onClick={handleLogout}
              fontSize="0.875rem"
              justifyContent="flex-start"
            >
              Thoát
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
