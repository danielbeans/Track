import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    HStack,
    Input,
    Link,
    Text,
    VStack,
    WarningOutlineIcon,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";

import { AuthContext } from "../context/auth_context";

export default function Login({ navigation }) {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    function onSubmit(data) {
        if (false) {
            setError("email", {
                type: "invalid_auth",
                message: "Email and/or password is invalid",
            });
            return;
        }
        console.log(data);
        setAuthenticated(true);
    }

    return (
        <Center w="100%" h="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Center>
                    <Heading
                        size="2xl"
                        color="coolGray.800"
                        _dark={{
                            color: "warmGray.50",
                        }}
                    >
                        Login
                    </Heading>
                </Center>
                <VStack space={3} mt="5">
                    <FormControl isInvalid={"email" in errors}>
                        <FormControl.Label>Email</FormControl.Label>
                        <Controller
                            control={control}
                            name="email"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    onChangeText={(val) => onChange(val)}
                                    value={value}
                                />
                            )}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            {errors.email?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={"invalid_auth" in errors}>
                        <FormControl.Label>Password</FormControl.Label>
                        <Controller
                            control={control}
                            name="password"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    onChangeText={(val) => onChange(val)}
                                    value={value}
                                />
                            )}
                        />
                        <Link
                            _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "indigo.500",
                            }}
                            alignSelf="flex-end"
                            mt="1"
                        >
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        mt="2"
                        colorScheme="indigo"
                    >
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                        >
                            I'm a new user.{" "}
                        </Text>
                        <Link
                            _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm",
                            }}
                            onPress={() => navigation.navigate("Signup")}
                        >
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}
