export interface ICateHeader {
    title: string;
    icon?: React.ReactNode;
    href: string;
}
export interface Teacher {
    id: string;
    name: string;
    email: string;
}

export interface Campus {
    id: string;
    campus_status: string;
    is_active: boolean;
    campus_code: string;
    campus_name: string;
    campus_cluster: string;
    campus_address: string;
    createdAt: string;
    updatedAt: string;
    campus_slug: string;
}

export interface CourseLevel {
    id: string;
    course_level_title: string;
    course_level_slug: string;
    course_level_description: string;
    created: number;
    updated: number;
}

export interface ClassObject {
    id: string;
    sessions: string[];
    students: string[];
    teachers: Teacher[];
    class_status: string;
    class_name: string;
    class_code: string;
    class_note: string;
    class_type: string;
    course: string;
    campus: Campus;
    class_location: string;
    number_student: number;
    start_date: string;
    end_date: string;
    calendar_config: {
        rank: string[];
    };
    author: string;
    created: number;
    updated: number;
    normalized_class_name: string;
    class_slug: string;
    course_level: CourseLevel;
    course_price: number;
    course_discount: number;
    number_student_in_class: number;
    number_student_register_class: number;
}
