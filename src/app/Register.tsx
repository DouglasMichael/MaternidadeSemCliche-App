import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { Divider } from "../Components/Divider";
import { SocialMedia } from "../Components/SocialMedia";
import { EnterWith } from "@/Components/Enterwith";
import { PropsScreensApp } from "@/routes/interface";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/Components/Toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Register({ navigation }: PropsScreensApp<"Register">) {
  const [Nome, setNome] = useState("");
  const [Cpf, setCpf] = useState("");
  const [Email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmSenha, setConfirmSenha] = useState("");
  const { toast } = useToast();

  const formatarData = (texto: string) => {
    // Remover qualquer caractere não numérico
    let data = texto.replace(/\D/g, "");

    // Limitar a string para no máximo 8 caracteres (aaaa-mm-dd)
    if (data.length > 8) {
      data = data.slice(0, 8);
    }

    // Adicionar os separadores "-" apenas quando necessário
    if (data.length >= 5) {
      data = `${data.slice(0, 4)}-${data.slice(4, 6)}-${data.slice(6, 8)}`;
    } else if (data.length >= 3) {
      data = `${data.slice(0, 4)}-${data.slice(4, 6)}`;
    } else if (data.length >= 1) {
      data = `${data.slice(0, 4)}`;
    }

    // Atualizar o estado com a nova data formatada
    setDataNascimento(data);
  };

  async function Register() {
    if (Senha !== ConfirmSenha || !Senha || !ConfirmSenha) {
      return toast("As senhas não conferem");
    }

    try {
      const response = await axios.post("http://192.168.15.22:3000/register", {
        nome: Nome,
        email: Email,
        senha: Senha,
        nascimento: dataNascimento,
        telefone: Telefone,
        cpf: Cpf,
      });

      if (response.status === 200) {
        await AsyncStorage.setItem("accessToken", response.data.accessToken);
        await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
        return navigation.navigate("Home");
      }
    } catch (erro) {
      if (axios.isAxiosError(erro)) {
        return toast(JSON.stringify(erro.response?.data.mensagem))
      }
    }
  }

  return (
    <ScrollView className="flex-1 bg-[#F5EBE0]">
      <View className="pt-7 items-center">
        <Image
          source={require("../assets/Logo 2.png")}
          resizeMode="contain"
          className="w-[90%]"
        />
      </View>

      <View className="items-center mb-12">
        <Text className="font-bold text-2xl text-[#ed967d]">
          Criar nova conta:
        </Text>
        <Text className="font-medium text-xl text-center w-[90%] text-[#70bac2]">
          Venha fazer parte dessa linda rede de apoio a mulheres!
        </Text>
      </View>

      <View className="px-6 justify-evenly">
        <View className="gap-3">
          <Text className="text-[#ed967d]">Nome Completo</Text>
          <Input
            className="border-[#ed967d]"
            value={Nome}
            onChangeText={(text) => setNome(text)}
          />
          <Text className="text-[#ed967d]">CPF</Text>
          <Input
            className="border-[#ed967d]"
            keyboardType="numeric"
            maxLength={11}
            value={Cpf}
            onChangeText={(text) => setCpf(text.replace(/\D/g, ""))}
          />
          <Text className="text-[#ed967d]">Email</Text>
          <Input
            className="border-[#ed967d]"
            keyboardType="email-address"
            value={Email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text className="text-[#ed967d]">Data Nascimento</Text>
          <Input
            className="border-[#ed967d]"
            keyboardType="number-pad"
            placeholder="AAAA-MM-DD"
            maxLength={10}
            value={dataNascimento}
            onChangeText={formatarData}
          />
          <Text className="text-[#ed967d]">Tel(DDD)</Text>
          <Input
            className="border-[#ed967d]"
            keyboardType="number-pad"
            maxLength={11}
            value={Telefone}
            onChangeText={(text) => setTelefone(text.replace(/\D/g, ""))}
          />
          <Text className="text-[#ed967d]">Senha</Text>
          <Input
            className="border-[#ed967d]"
            secureTextEntry
            value={Senha}
            onChangeText={(text) => setSenha(text)}
          />
          <Text className="text-[#ed967d]">Confirmar Senha</Text>
          <Input
            className="border-[#ed967d]"
            secureTextEntry
            value={ConfirmSenha}
            onChangeText={(text) => setConfirmSenha(text)}
          />
        </View>
      </View>
      <View className="my-10 px-6">
        <Button label="Cadastar" size="lg" onPress={Register} />
      </View>

      <TouchableOpacity
        className="mb-5 items-center"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-[#70BAC2]">já possui cadastro? Entre</Text>
      </TouchableOpacity>

      <Divider label="ou" />
      <EnterWith label={"Cadastre-se com:"} />
    </ScrollView>
  );
}
