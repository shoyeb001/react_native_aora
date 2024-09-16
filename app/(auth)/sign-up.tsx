import { SafeAreaView } from "react-native-safe-area-context";
import { Text, ScrollView, View, Image } from "react-native";
import { images } from "@/constants";
import FormFeild from "@/components/FormFeild";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "@/lib/appwrite";
const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {
        console.log("gello")
        createUser();
    }
    return (
        <>
            <SafeAreaView className="bg-primary h-full ">
                <ScrollView>
                    <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                        <Image
                            source={images.logo}
                            resizeMode="contain"
                            className="w-[115px] h-[34px]"
                        />
                        <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>
                        <FormFeild
                            title="Username"
                            value={form.username}
                            handelChangeText={(e: any) => setForm({ ...form, username: e })}
                            otherStyles="mt-10"
                        />

                        <FormFeild
                            title="Email"
                            value={form.email}
                            handelChangeText={(e: any) => setForm({ ...form, email: e })}
                            otherStyles="mt-7"
                            keyboardType="email-address"
                        />

                        <FormFeild
                            title="Password"
                            value={form.password}
                            handelChangeText={(e: any) => setForm({ ...form, password: e })}
                            otherStyles="mt-7"
                        />
                        <CustomButton
                            title="Sign up"
                            handlePress={submit}
                            containerStyles="mt-7"
                            isLoading={isSubmitting}
                            textStyles=""
                        />
                        <View className="flex justify-center pt-5 flex-row gap-2">
                            <Text className="text-lg text-gray-100 font-pregular">
                                Have an account already?
                            </Text>
                            <Link
                                href="/sign-in"
                                className="text-lg font-psemibold text-secondary"
                            >
                                Login
                            </Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>

    )
}

export default SignUp;