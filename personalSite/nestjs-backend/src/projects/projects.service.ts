import { Injectable } from '@nestjs/common';
import { db } from '../../firebase/config';

@Injectable()
export class ProjectsService {
    async getAllProjects() {
        const projectsRef = db.collection('projects');
        const snapshot = await projectsRef.get();
        const result = [];

        snapshot.forEach(doc => {
            result.push({id: doc.id, ...doc.data()})
        })
        return result;
    }

    async createProject(body) {
        const project = await db.collection('projects').add(body);
        const projectRef = db.collection('projects').doc(project.id);
        const doc = await projectRef.get();
        return { ...doc.data(), id: project.id };
    }
    
    async editProject(body, id) {
        const projectRef = db.collection('projects').doc(id);
        await  projectRef.update(body);
        return { ...body, id };
    }

    async setVisibility(body, id) {
        const projectRef = db.collection('projects').doc(id);
        await projectRef.update({isVisible: !body.visibility});
        return { id };
    }

    async deleteProject(id) {
        await db.collection('projects').doc(id).delete();
        return { id };
    }
}
