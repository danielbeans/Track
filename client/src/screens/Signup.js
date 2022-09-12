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

export default function Signup({ navigation }) {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    function onSubmit(data) {
        console.log(data);
        setAuthenticated(true);
    }

    return (
        <Center w="100%" h="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Center>
                    <Heading
                        size="2xl"
                        color="coolGray.800"
                        _dark={{
                            color: "warmGray.50",
                        }}
                    >
                        Sign Up
                    </Heading>
                </Center>
                <VStack space={3} mt="5">
                    <FormControl isInvalid={"firstName" in errors}>
                        <FormControl.Label isRequired>
                            First Name
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="firstName"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    onChangeText={(val) => onChange(val)}
                                    value={value}
                                />
                            )}
                            rules={{ required: "Field is required" }}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            {errors.firstName?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={"lastName" in errors}>
                        <FormControl.Label isRequired>
                            Last Name
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="lastName"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    onChangeText={(val) => onChange(val)}
                                    value={value}
                                />
                            )}
                            rules={{ required: "Field is required" }}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            {errors.lastName?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={"email" in errors}>
                        <FormControl.Label isRequired>Email</FormControl.Label>
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
                            rules={{ required: "Field is required" }}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            {errors.email?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={"password" in errors}>
                        <FormControl.Label isRequired>
                            Password
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="password"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    onChangeText={(val) => onChange(val)}
                                    value={value}
                                    type="password"
                                />
                            )}
                            rules={{ required: "Field is required" }}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            {errors.password?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={"password_repeat" in errors}>
                        <FormControl.Label isRequired>
                            Repeat Password
                        </FormControl.Label>
                        <Controller
                            control={control}
                            name="password_repeat"
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    onChangeText={(val) => onChange(val)}
                                    value={value}
                                    type="password"
                                />
                            )}
                            rules={{
                                required: "Field is required",
                                validate: (val) => {
                                    if (watch("password") != val)
                                        return "Passwords don't match";
                                },
                            }}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            {errors.password_repeat?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        mt="2"
                        colorScheme="indigo"
                    >
                        Sign up
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                        >
                            I already have an account.{" "}
                        </Text>
                        <Link
                            _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm",
                            }}
                            onPress={() => navigation.navigate("Login")}
                        >
                            Login
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}
