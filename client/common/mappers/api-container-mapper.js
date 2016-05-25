export function mapSingle (apiEntity){
    return {
        thinking: false, //State helper value
        hasError: false, //State helper value
        valid: apiEntity.is_valid,
        running: apiEntity.is_running,
        ip: apiEntity.ip_address,
        results: apiEntity.results,
        config: apiEntity.config,
        image: {
            id: apiEntity.image,
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
    return apiEntitys.map(container => mapSingle(container));
}
