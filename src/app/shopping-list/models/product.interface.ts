

interface Person {
    name: string;
    age: number;
    title: string;
}






declare module namespace {

    export interface Area {
        id: number;
        title: string;
    }

    export interface Speciality {
        id: number;
        title: string;
        avatar: string;
    }

    export interface Grade {
        id: number;
        title: string;
    }

    export interface Day {
        date: string;
        day_name: string;
        day_number: string;
        month_number: string;
        month_name: string;
        slots: any[];
    }

    export interface Event {
        doctor_id: number;
        day: Day;
        doctor_is_available: boolean;
    }

    export interface RootObject {
        id: number;
        first_name: string;
        middle_name: string;
        last_name: string;
        avatar?: any;
        description: string;
        address: string;
        fees: number;
        area: Area;
        speciality: Speciality;
        grade: Grade;
        events: Event[];
    }

}
