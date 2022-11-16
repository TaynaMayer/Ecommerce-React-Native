import { LinearGradient } from "expo-linear-gradient";

export const Gradient = () =>{
    return (
        <LinearGradient
            colors={['#orange', 'transparent', 'transparent', 'transparent', '#orange']}
            styles={{
                color: 'black',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width:'100%',
                top: 0,
                zIndex: -1,
            }}
        />
    )
}