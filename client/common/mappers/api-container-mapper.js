export function mapSingle (apiEntity){
    return {
        valid: apiEntity.is_valid,
        running: apiEntity.is_running,
        ip: apiEntity.ip_address,
        results: apiEntity.results,
        config: apiEntity.config,
        image: {
            id: apiEntity.image_id,
            name: apiEntity.image_name,
            version: apiEntity.image_version,
            path: apiEntity.image_path,
            isBuilt: apiEntity.is_image_build,
        },
        container: {
            id: apiEntity.container_id,
            name: apiEntity.container_name,
            tag: apiEntity.container_tag,
            built: apiEntity.is_container_build
        }
    }
}

export function mapMany (apiEntitys){
    console.log("map many")
    return apiEntitys.map(container => mapSingle(container));
}